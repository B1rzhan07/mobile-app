import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function IndexPage() {
  return (
    <View className="flex justify-center items-center min-h-screen">
      <Text className="font-pblack">Hello World</Text>
      <Link href={"/home"}>Home Link</Link>
    </View>
  );
}
