import { Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../theme/globalStyles";

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
      <TouchableOpacity style={globalStyles.circleBtn} onPress={decrement}>
        <Text style={globalStyles.circleBtn}>-</Text>
      </TouchableOpacity>

      <Text onPress={resetPeople} style={globalStyles.counterNumber}>
        {people}
      </Text>

      <TouchableOpacity style={globalStyles.circleBtn} onPress={increment}>
        <Text style={globalStyles.circleBtn}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
