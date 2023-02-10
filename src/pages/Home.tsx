import colors from "tailwindcss/colors";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Button } from "../components/Button";

export function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Feather name="home" size={32} color={colors.green[500]} />

      <Text className="text-green-500 text-2xl font-bold mt-2">
        Let's go play basketball!
      </Text>

      <Button className="w-4/5" />
    </View>
  );
}
