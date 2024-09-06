import {
  Alert,
  FlatList,
  Image,
  ImageBackground,
  ImageSourcePropType,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GlobalStye } from "../../styles/globa.style";
import { Header } from "../../components/Header";
import bgImg from "../../assets/images/darkb.jpg";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getAllProperties } from "../../redux/actions/propertyAction";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "../../components/Card";
const HomePage = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  useEffect(() => {
    dispatch(getAllProperties({ userId: "", search: "" }));
  }, [dispatch]);
  const { properties } = useAppSelector((state) => state.property);
  return (
    <SafeAreaView style={GlobalStye.container}>
      <ScrollView style={{ width: "100%", flex: 1 }}>
        <View
          style={
            (GlobalStye.wrapper, [[{ paddingHorizontal: 0, minHeight: 500 }]])
          }
        >
          <ImageBackground
            source={bgImg as ImageSourcePropType}
            style={{ width: "100%", height: 550 }}
          >
            <Header />
            <View
              style={{
                width: "100%",
                marginTop: 18,
                paddingHorizontal: 23,
                display: "flex",
              }}
            >
              <Text
                style={{ color: "white", fontSize: 43, fontWeight: "bold" }}
              >
                Buy, rent, or sell your property easily
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "bold",
                  marginTop: 29,
                }}
              >
                A great platform to buy, sell, or even rent your properties
                without any commisions.
              </Text>
              <View
                style={{
                  marginTop: 39,
                  width: "90%",
                  marginHorizontal: "auto",
                  height: 100,
                  borderRadius: 10,
                  backgroundColor: "rgba(255 255 255 / 0.8)",
                }}
              >
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    height: "35%",
                    borderBottomWidth: 1,
                    borderBottomColor: "#6058B9",
                  }}
                >
                  <View
                    style={{
                      width: "33.333%",
                      height: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottomColor: "#1400FF",
                      borderBottomWidth: 2,
                    }}
                  >
                    <Text style={{ fontSize: 18, color: "#6058B9" }}>Rent</Text>
                  </View>
                  <View
                    style={{
                      width: "33.333%",
                      height: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ fontSize: 18, color: "#6058B9" }}>Buy</Text>
                  </View>
                  <View
                    style={{
                      width: "33.333%",
                      height: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ fontSize: 18, color: "#6058B9" }}>
                      Lease
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: "100%",
                    height: "65%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#7065F0",
                      height: 40,
                      width: "80%",
                      marginHorizontal: "auto",
                      borderRadius: 5,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{ color: "white", fontSize: 17, fontWeight: 500 }}
                    >
                      Brows properties
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            width: "100%",
            minHeight: 399,
            paddingHorizontal: 23,
            marginTop: 24,
          }}
        >
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>
              Brows properteis
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              marginTop: 20,
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <FlatList
              data={properties}
              numColumns={2} // This ensures 2 items per row
              keyExtractor={(item) => JSON.stringify(item)}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              renderItem={({ item }) => <Card item={item} />}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomePage;
