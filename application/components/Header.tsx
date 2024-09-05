import { Image, StyleProp, Text, View, ViewStyle } from "react-native";
import Logo from "../assets/images/jre-logo.png";
import QtrFlag from "../assets/images/qtr.png";
import UsFlag from "../assets/images/us.png";
import Mail from "../assets/icons/mail.png";
import Call from "../assets/icons/phone-call.png";
export const Header = () => {
  return (
    <View
      style={{
        height: 110,
        width: "100%",
        borderStyle: "solid",

        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <View
        style={
          {
            height: "30%",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "rgba(0 0 0 / 0.7)",
            paddingHorizontal: 20,
            gap: 22,
          } as unknown as StyleProp<ViewStyle>
        }
      >
        <View
          style={{
            height: 21,
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <Image source={Call} style={{ height: 15, width: 15 }} />
          <Text style={{ color: "white" }}>+974 946410015</Text>
        </View>
        <View
          style={{
            height: 21,
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <Image source={Mail} style={{ height: 15, width: 15 }} />
          <Text style={{ color: "white" }}>abc@gmail.com</Text>
        </View>
        <Image source={QtrFlag} style={{ height: 21, width: 35 }} />
        <Image source={UsFlag} style={{ height: 21, width: 35 }} />
      </View>
      <View
        style={{
          height: "70%",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 16,
        }}
      >
        <Image source={Logo} style={{ width: 162, height: 52 }} />
      </View>
    </View>
  );
};
