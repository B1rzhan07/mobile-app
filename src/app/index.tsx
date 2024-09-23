import { router } from "expo-router";
import { Image, Platform, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import { CustomButton } from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { useQuery } from "@tanstack/react-query";
import { fetchSubjects } from "../api/subjectServiceApiType";

export default function IndexPage() {
  const query = useQuery({
    queryKey: ["subjects"],
    queryFn: fetchSubjects,
  });
  console.log(query, 123);
  console.log(Platform.OS === "ios");

  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            {query.data?.data.total}
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/home")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#FFF" style="light" />
    </SafeAreaView>
  );
}
