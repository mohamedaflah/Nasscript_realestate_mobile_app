import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { GlobalStye } from "../../styles/globa.style";
import { SafeAreaView } from "react-native-safe-area-context";
import PhoneInput, { ICountry } from "react-native-international-phone-number";
import { useState } from "react";
import { Link, router } from "expo-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../../utils/schemas/signup.schema";
import { useAppDispatch } from "../../redux/store";
import { userSignup, validateUser } from "../../redux/actions/user.action";
import auth from "@react-native-firebase/auth";
import {
  setConfirmationResult,
  setUserLocally,
} from "../../redux/reducers/user.reducer";
import { supabase } from "../../config/supabaseClient";
import { IUser } from "../../types/user.types";
import Toast from "react-native-toast-message";
// iZvJBep2!#pjZq*
const SignupPage = () => {
  const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const {
    setValue,
    watch,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof signupSchema>>({
    mode: "onChange",
    resolver: zodResolver(signupSchema),
    reValidateMode: "onChange",
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const dispatch = useAppDispatch();
  const handleSignupSubmit = (values: z.infer<typeof signupSchema>) => {
    if (values.email == "" || !values.email) {
      delete values.email;
    }

    dispatch(
      validateUser({
        email: values.email as string,
        phoneNumber: values.phoneNumber.replace(/\s+/g, ""),
      })
    ).then(async (res) => {
      try {
        if (res.type.endsWith("fulfilled")) {
          dispatch(userSignup(values as IUser)).then((res) => {
            if (res.type.endsWith("fulfilled")) {
              router.push("/");
            }
          });
        }
      } catch (error) {
        console.log("🚀 ~ ).then ~ error:", error);
        Alert.alert((error as any).message);
      }
    });
  };
  return (
    <SafeAreaView style={GlobalStye.container}>
      <Toast position="top" />
      <View
        style={{
          width: "88%",
          minHeight: 520,
          borderWidth: 1,
          marginHorizontal: "auto",
          marginVertical: "auto",
          borderRadius: 10,
          borderColor: "#cfd1d0",
          paddingVertical: 29,
          paddingHorizontal: 10,
        }}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontSize: 22, fontWeight: "medium" }}>
            Create an new Account
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            marginTop: 24,
            paddingHorizontal: 15,
            gap: 18,
          }}
        >
          <View style={{ width: "100%" }}>
            <Text>Username</Text>
            <TextInput
              onChangeText={(val) => {
                setValue("username", val);
                trigger("username");
              }}
              value={watch("username")}
              style={{
                width: "100%",
                height: 45,
                backgroundColor: "white",
                marginTop: 8,
                borderWidth: 1,
                borderColor: "gray",
                borderRadius: 8,
                paddingHorizontal: 10,
              }}
              placeholder="Enter Your username"
            />
            <Text style={{ fontSize: 13, color: "red" }}>
              {errors && errors.username && errors.username?.message}
            </Text>
          </View>
          <View style={{ width: "100%" }}>
            <Text>Mobile number</Text>
            <View style={{ height: 45, marginTop: 8 }}>
              <PhoneInput
                value={inputValue as string}
                onChangePhoneNumber={(number: string) => {
                  if (number && number !== "") {
                    setInputValue(number);
                    setValue(
                      "phoneNumber",
                      `${selectedCountry?.callingCode}${number}`
                    );
                  }
                }}
                placeholder="Enter mobile number"
                selectedCountry={selectedCountry}
                onChangeSelectedCountry={(country: ICountry) => {
                  setSelectedCountry(country);
                  setValue("phoneNumber", "");
                }}
              />
              <Text style={{ fontSize: 13, color: "red" }}>
                {errors && errors.phoneNumber && errors.phoneNumber?.message}
              </Text>
              {/* <Text>{selectedCountry?.callingCode}{inputValue}</Text> */}
            </View>
          </View>
          <View style={{ width: "100%", marginTop: 4 }}>
            <Text>Password</Text>
            <TextInput
              secureTextEntry
              style={{
                width: "100%",
                height: 45,
                backgroundColor: "white",
                marginTop: 8,
                borderWidth: 1,
                borderColor: "gray",
                borderRadius: 8,
                paddingHorizontal: 10,
              }}
              onChangeText={(val) => {
                setValue("password", val);
                trigger("password");
              }}
              value={watch("password")}
              placeholder="Enter password"
            />
            <Text style={{ fontSize: 13, color: "red" }}>
              {errors && errors.password && errors.password?.message}
            </Text>
          </View>
          <View style={{ width: "100%" }}>
            <Text>Email (Optional)</Text>
            <TextInput
              style={{
                width: "100%",
                height: 45,
                backgroundColor: "white",
                marginTop: 8,
                borderWidth: 1,
                borderColor: "gray",
                borderRadius: 8,
                paddingHorizontal: 10,
              }}
              onChangeText={(val) => {
                setValue("email", val);
                trigger("email");
              }}
              value={watch("email")}
              placeholder="Enter your email address if available"
            />
            <Text style={{ fontSize: 13, color: "red" }}>
              {errors && errors.email && errors.email?.message}
            </Text>
          </View>
          <Pressable
            style={{
              height: 45,
              width: "100%",
              borderRadius: 8,
              backgroundColor: "rgb(112 101 240)",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={handleSubmit(handleSignupSubmit)}
          >
            <Text
              style={{
                textTransform: "uppercase",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Create Account
            </Text>
          </Pressable>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginTop: -4,
            }}
          >
            <Text>
              Already have an account{" "}
              <Link href={"/login"} style={{ color: "rgb(112 101 240)" }}>
                Login
              </Link>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SignupPage;
