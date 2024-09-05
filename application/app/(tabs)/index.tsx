import {
  Alert,
  FlatList,
  Image,
  ImageBackground,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GlobalStye } from "../../styles/globa.style";
import { Header } from "../../components/Header";
import bgImg from "../../assets/images/darkb.jpg";
import Hrt from "../../assets/icons/heart.png";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getAllProperties } from "../../redux/actions/propertyAction";
const HomePage = () => {
  const dispatch = useAppDispatch();
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
            style={{ width: "100%", height: 500 }}
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
              renderItem={({ item }) => (
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
                        <Image style={{ width: 18, height: 18 }} source={Hrt as ImageSourcePropType} />
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
                      >
                        {item.address?.city},{item.address?.state},
                        {item.address?.country}
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
                      >
                        <Text style={{ color: "white", fontWeight: 800 }}>
                          Go to details
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomePage;
