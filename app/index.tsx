import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { Counter } from "../src/components/Counter";
import { Keypad } from "../src/components/Keypad";
import { TipButton } from "../src/components/TipButton";
import { useTipCalculator } from "../src/hooks/useTipCalculator";
import { globalStyles } from "../src/theme/globalStyles";

export default function HomeScreen() {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  useEffect(() => {
    ScreenOrientation.unlockAsync();
  }, []);
  const {
    amount,
    tip,
    people,
    buildNumber,
    deleteLast,
    resetAll,

    setTip,
    incrementPeople,
    decrementPeople,
    resetPeople,
    isCustomTip,
    customTip,
    setCustomTip,
    setIsCustomTip,
  } = useTipCalculator();

  return (
    <View style={globalStyles.container}>
      {/* Aqui inicia para girar pantalla */}
      {isLandscape ? (
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 2 }}>
            <View style={globalStyles.card}>
              <Text style={globalStyles.subtitle}>Total per Person</Text>

              <Text style={globalStyles.total}>
                C${((Number(amount) * (1 + tip)) / people).toFixed(2)}
              </Text>

              <View style={globalStyles.amountRow}>
                <Text style={globalStyles.amountLabel}>Bill</Text>
                <Text style={globalStyles.amountValue}>
                  C${Number(amount).toFixed(2)}
                </Text>
              </View>

              <View style={globalStyles.amountRow}>
                <Text style={globalStyles.amountLabel}>
                  Tip ({isCustomTip ? customTip || 0 : tip * 100} %)
                </Text>
                <Text style={globalStyles.amountValue}>
                  C${(Number(amount) * tip).toFixed(2)}
                </Text>
              </View>
            </View>

            {/* CONTROLES */}
            <View style={globalStyles.card}>
              <View>
                <Text style={globalStyles.label}>Tip</Text>

                <View style={globalStyles.row}>
                  {[10, 15, 20].map((t) => (
                    <TipButton
                      key={t}
                      value={t}
                      selected={!isCustomTip && tip === t / 100}
                      onPress={() => {
                        setIsCustomTip(false);
                        setTip(t / 100);
                      }}
                    />
                  ))}
                </View>

                <TouchableOpacity
                  onPress={() => {
                    setIsCustomTip(true);
                    setCustomTip("0");
                  }}
                  style={[
                    globalStyles.tipButton,
                    { marginTop: 10, alignItems: "center" },
                    isCustomTip && globalStyles.tipButtonActive,
                  ]}
                >
                  <Text style={globalStyles.tipButtonText}>
                    {isCustomTip ? `Custom: ${customTip}%` : "Custom Tip"}
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={[globalStyles.rowBetween, { marginTop: 20 }]}>
                <Text style={globalStyles.label}>Split</Text>

                <Counter
                  people={people}
                  increment={incrementPeople}
                  decrement={decrementPeople}
                  resetPeople={resetPeople}
                />
              </View>
            </View>
          </View>

          <View style={{ flex: 3, justifyContent: "flex-end" }}>
            <Keypad
              buildNumber={buildNumber}
              deleteLast={deleteLast}
              resetAll={resetAll}
            />
          </View>
        </View>
      ) : (
        <>
          <View style={globalStyles.card}>
            <Text style={globalStyles.subtitle}>Total per Person</Text>

            <Text style={globalStyles.total}>
              C${((Number(amount) * (1 + tip)) / people).toFixed(2)}
            </Text>

            <View style={globalStyles.amountRow}>
              <Text style={globalStyles.amountLabel}>Bill</Text>
              <Text style={globalStyles.amountValue}>
                C${Number(amount).toFixed(2)}
              </Text>
            </View>

            <View style={globalStyles.amountRow}>
              <Text style={globalStyles.amountLabel}>
                Tip (
                {isCustomTip
                  ? Number(customTip).toFixed(0)
                  : (tip * 100).toFixed(0)}
                %)
              </Text>
              <Text style={globalStyles.amountValue}>
                C${(Number(amount) * tip).toFixed(2)}
              </Text>
            </View>
          </View>

          <View style={globalStyles.card}>
            <View style={globalStyles.rowBetween}>
              <Text style={globalStyles.label}>Tip</Text>

              <View style={globalStyles.row}>
                {[10, 15, 20].map((t) => (
                  <TipButton
                    key={t}
                    value={t}
                    selected={!isCustomTip && tip === t / 100}
                    onPress={() => {
                      setIsCustomTip(false);
                      setTip(t / 100);
                    }}
                  />
                ))}

                <TipButton
                  value={"Custom "}
                  selected={isCustomTip}
                  onPress={() => {
                    setIsCustomTip(true);
                    setCustomTip("0");
                  }}
                />
              </View>
            </View>

            <View style={[globalStyles.rowBetween, { marginTop: 20 }]}>
              <Text style={globalStyles.label}>Split</Text>

              <Counter
                people={people}
                increment={incrementPeople}
                decrement={decrementPeople}
                resetPeople={resetPeople}
              />
            </View>
          </View>

          <View style={globalStyles.keypadContainer}>
            <Keypad
              buildNumber={buildNumber}
              deleteLast={deleteLast}
              resetAll={resetAll}
            />
          </View>
        </>
      )}
    </View>
  );
}
