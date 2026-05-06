import { Text, View } from "react-native";
import { Counter } from "../src/components/Counter";
import { Keypad } from "../src/components/Keypad";
import { TipButton } from "../src/components/TipButton";
import { useTipCalculator } from "../src/hooks/useTipCalculator";

export default function HomeScreen() {
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
  } = useTipCalculator();

  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 20 }}>Monto: ${amount}</Text>

        <Text style={{ fontSize: 20 }}>
          Propina: ${(Number(amount) * tip).toFixed(2)}
        </Text>

        <Text style={{ fontSize: 35, fontWeight: "bold" }}>
          Por persona: ${((Number(amount) * (1 + tip)) / people).toFixed(2)}
        </Text>
      </View>

      <View style={{ alignItems: "center" }}>
        {/* BOTONES DE PROPINA */}
        <View style={{ flexDirection: "row" }}>
          {[10, 15, 20].map((t) => (
            <TipButton
              key={t}
              value={t}
              selected={tip === t / 100}
              onPress={() => setTip(t / 100)}
            />
          ))}
        </View>

        <Counter
          people={people}
          increment={incrementPeople}
          decrement={decrementPeople}
          resetPeople={resetPeople}
        />
      </View>

      <Keypad
        buildNumber={buildNumber}
        deleteLast={deleteLast}
        resetAll={resetAll}
      />
    </View>
  );
}
