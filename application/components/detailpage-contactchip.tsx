import React, { ReactNode } from "react";
import { Text, View } from "react-native";

export const ContactInformationBox = ({text,Icon}: {
  text: string;
  Icon: React.FC;
}) => {
  return (
    <View
      style={{
        width: "100%",
        height: 37,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "hsl(0 0% 90.1%)",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          width: "14%",
          borderColor: "hsl(0 0% 90.1%)",
          borderRightWidth: 1,
        }}
      >
        <Icon />
      </View>
      <View style={{ justifyContent: "center", paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 17 }}>{text}</Text>
      </View>
    </View>
  );
};
