import colors from "tailwindcss/colors";
import { useColorScheme } from "nativewind";
import { View, Text, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Button } from "../components/Button";
import { ToggleTheme } from "../components/ToggleTheme";

export function Home() {
  const { colorScheme } = useColorScheme();

  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black  p-8">
      <ToggleTheme />

      <View className="flex-row items-center justify-center gap-2 ">
        <Ionicons
          name="basketball"
          size={32}
          color={
            colorScheme === "dark" ? colors.green[500] : colors.orange[500]
          }
        />

        <Text className="text-orange-500 dark:text-green-500  text-2xl font-bold mt-2">
          Let's go play basketball!
        </Text>
      </View>

      <TextInput className="w-full h-14 border-2 border-black dark:border-white rounded-md my-2 text-white px-4 focus:border-green-500" />

      <Button className="w-full" />
    </View>
  );
}
