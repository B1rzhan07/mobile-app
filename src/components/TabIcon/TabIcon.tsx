import { Image, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";

interface ITabIcon {
  icon: number | { uri: string };
  color: string;
  name: string;
  focused: boolean;
}

export const TabIcon: FC<ITabIcon> = ({ icon, color, name, focused }) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
