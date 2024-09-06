import {
  Image,
  ImageSourcePropType,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import Logo from "../assets/images/jre-logo.png";
import QtrFlag from "../assets/images/qtr.png";
import UsFlag from "../assets/images/us.png";
import Mail from "../assets/icons/mail.png";
import Call from "../assets/icons/phone-call.png";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { logoutUser } from "../redux/actions/user.action";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUserEmpty } from "../redux/reducers/user.reducer";
export const Header = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
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
          <Image
            source={Call as ImageSourcePropType}
            style={{ height: 15, width: 15 }}
          />
          <Text style={{ color: "white" }}>+974 946410015</Text>
        </View>
        {/* <View
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
        </View> */}
        <Image
          source={QtrFlag as ImageSourcePropType}
          style={{ height: 21, width: 35 }}
        />
        <Image
          source={UsFlag as ImageSourcePropType}
          style={{ height: 21, width: 35 }}
        />
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
        <Image
          source={Logo as ImageSourcePropType}
          style={{ width: 162, height: 52 }}
        />
        {user && (
          <>
            <TouchableOpacity
              style={{
                height: 35,
                width: 100,
                borderWidth: 1,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                backgroundColor: "rgb(112 101 240)",
              }}
              onPress={async () => {
                await AsyncStorage.removeItem("token");
                dispatch(setUserEmpty());
              }}
            >
              <Text style={{ color: "white", textTransform: "uppercase" }}>
                Logout
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};
