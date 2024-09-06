import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";
import { IProperty } from "../types/property.types";
import Hrt from "../assets/icons/heart.png";
import { router } from "expo-router";
export const Card = ({ item }: { item: IProperty }) => {
  return (
    <View
      style={{
        width: "49%",
        height: 300,
        borderWidth: 1,
        backgroundColor: "#fff",
        borderColor: "#F0EFFB",
        borderRadius: 10,
        marginVertical: 5,
        overflow: "hidden",
      }}
    >
      <View style={{ width: "100%", height: "40%" }}>
        <Image
          source={{ uri: String(item?.images?.[0]) }}
          style={{
            height: "100%",
            width: "100%",
            resizeMode: "cover",
          }}
        />
      </View>
      <View
        style={{
          width: "100%",
          height: "60%",
          paddingHorizontal: 10,
          paddingVertical: 12,
        }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
              color: "rgb(112 101 240)",
            }}
          >
            ₹{item.price}
          </Text>
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 100,
              backgroundColor: "#e8e4e3",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 18, height: 18 }}
              source={Hrt as ImageSourcePropType}
            />
          </View>
        </View>
        <View
          style={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
            }}
            numberOfLines={1} // Adjust the number of lines you want to show
            ellipsizeMode="tail"
          >
            {item.title}
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 18,
          }}
        >
          <Text
            style={{
              fontSize: 13,
              fontWeight: "300",
            }}
               numberOfLines={1} // Adjust the number of lines you want to show
            ellipsizeMode="tail"
          >
            {item.address?.city},{item.address?.state},{item.address?.country}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              width: "100%",
              height: 30,
              marginTop: 18,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#7065F0",
              borderRadius: 5,
            }}
            onPress={()=>{
              router.push(`/property/${item._id}`)
            }}
          >
            <Text style={{ color: "white", fontWeight: 800 }}>
              Go to details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
