import React from "react";
import { View } from "react-native";
import { CalculatorButton } from "./CalculatorButton";

type KeypadProps = {
  buildNumber: (key: string) => void;
  deleteLast: () => void;
  resetAll: () => void;
};

export const Keypad: React.FC<KeypadProps> = ({
  buildNumber,
  deleteLast,
  resetAll,
}) => {
  const keys = [
    ["C"],
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"],
    [".", "0", "del"],
  ];

  return (
    <View style={{ padding: 20 }}>
      {keys.map((row, i) => (
        <View key={i} style={{ flexDirection: "row" }}>
          {row.map((key) => (
            <CalculatorButton
              key={key}
              label={key}
              onPress={
                key === "del"
                  ? deleteLast
                  : key === "C"
                    ? resetAll
                    : () => buildNumber(key)
              }
            />
          ))}
        </View>
      ))}
    </View>
  );
};
