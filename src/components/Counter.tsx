import { Text, View } from "react-native";
import { CalculatorButton } from "./CalculatorButton";

type CounterProps = {
  people: number;
  increment: () => void;
  decrement: () => void;
  resetPeople: () => void;
};
export const Counter = ({
  people,
  increment,
  decrement,
  resetPeople,
}: CounterProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <CalculatorButton label="-" onPress={decrement} />

      <Text
        onPress={resetPeople}
        style={{ marginHorizontal: 20, fontSize: 20 }}
      >
        {people}
      </Text>

      <CalculatorButton label="+" onPress={increment} />
    </View>
  );
};
