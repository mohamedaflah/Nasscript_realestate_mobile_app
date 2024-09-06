import { useLocalSearchParams } from "expo-router";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GlobalStye } from "../../../styles/globa.style";
import {
  BanknotesIcon,
  BuildingOfficeIcon,
  MapPinIcon,
  PhoneIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import { ContactInformationBox } from "../../../components/detailpage-contactchip";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { useEffect } from "react";
import { getPropertyWithId } from "../../../redux/actions/propertyAction";

export default function PropertyDetailPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPropertyWithId(id));
  }, [dispatch]);
  const { property } = useAppSelector((state) => state.property);
  return (
    <SafeAreaView style={GlobalStye.container}>
      <ScrollView style={GlobalStye.wrapper}>
        <View style={{ width: "100%", minHeight: 100, marginTop: 4 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            {property?.title}
          </Text>
          <View style={{ width: "100%", marginTop: 10 }}>
            <Text style={{ fontSize: 15, lineHeight: 22, fontFamily: "Font" }}>
              {property?.description}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            marginTop: 18,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "rgb(112 101 240)",
            }}
          >
            ₹{property?.price}
          </Text>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <BanknotesIcon size={24} color="rgb(112 101 240)" />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                color: "rgb(112 101 240)",
                textTransform: "capitalize",
              }}
            >
              {property?.listingType}
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <BuildingOfficeIcon size={24} color="rgb(112 101 240)" />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                color: "rgb(112 101 240)",
                textTransform: "capitalize",
              }}
            >
              {property?.propertyType}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            marginTop: 18,
            minHeight: 200,
            padding: 14,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "hsl(0 0% 90.1%)",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 21 }}>
            Contact Information
          </Text>
          <View style={{ width: "100%", gap: 10, marginTop: 10 }}>
            <ContactInformationBox
              text={String(property?.user?.username)}
              Icon={() => <UserIcon size={20} color="black" />}
            />
            <ContactInformationBox
              text={String(property?.user?.phoneNumber)}
              Icon={() => <PhoneIcon size={20} color="black" />}
            />
            <ContactInformationBox
              text={String(
                `${property?.address?.city},${property?.address?.state},${property?.address?.country}`
              )}
              Icon={() => <MapPinIcon size={20} color="black" />}
            />
            <ContactInformationBox
              text={String(property?.address?.zipcode)}
              Icon={() => <MapPinIcon size={20} color="black" />}
            />
          </View>
        </View>
        <View style={{ width: "100%", marginTop: 10 }}>
          <FlatList
            data={property?.images as unknown as string[]}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            renderItem={({ item }) => (
              <View
                style={{
                  width: "49%",
                  height: 200,
                  marginVertical: 5,
                }}
              >
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={{ uri: item }}
                  resizeMode="cover"
                />
              </View>
            )}
          />
        </View>
        <View style={{ width: "100%", marginTop: 10 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
}
