import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { FormField } from "@/src/components/FormField";
import { CustomButton } from "@/src/components/CustomButton";
import { useBearStore } from "@/src/store/store";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Please enter a valid email"),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export type SignInSchemaType = z.infer<typeof signInSchema>;

const SignInPage = () => {
  const bears = useBearStore((state) => state.bears);
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const removeAllBears = useBearStore((state) => state.removeAllBears);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data: SignInSchemaType) => {
    console.log(data, 123);
  };
  return (
    <SafeAreaView className="h-full bg-slate-500">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Controller
            name="email"
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
              <FormField
                title="Email"
                value={value}
                handleChangeText={onChange}
                keyboardType="email-address"
                onBlur={onBlur}
              />
            )}
          />
          <Text>{errors.email?.message}</Text>
          <Controller
            name="password"
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
              <FormField
                title="Password"
                value={value}
                handleChangeText={onChange}
                keyboardType="email-address"
                onBlur={onBlur}
              />
            )}
          />
          <Text>{errors.password?.message}</Text>
          <CustomButton
            handlePress={handleSubmit(onSubmit)}
            title="Submit"
            containerStyles="mt-2"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInPage;

const styles = StyleSheet.create({});
