import { Slot } from "expo-router";
import { View } from "react-native";

const RootLayout = () => {
  return (
    <View>
      <Slot />
    </View>
  );
};

export default RootLayout;
