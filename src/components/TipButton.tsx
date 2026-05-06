import * as Haptics from "expo-haptics";
import { Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../theme/globalStyles";

export const TipButton = ({
  value,
  selected,
  onPress,
}: {
  value: number | string;
  selected: boolean;
  onPress: () => void;
}) => {
  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onPress();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[globalStyles.tipButton, selected && globalStyles.tipButtonActive]}
    >
      <Text style={globalStyles.tipButtonText}>{value}%</Text>
    </TouchableOpacity>
  );
};
