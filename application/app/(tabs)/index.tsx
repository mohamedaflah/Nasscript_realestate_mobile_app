import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GlobalStye } from "../../styles/globa.style";
import { Header } from "../../components/Header";
import bgImg from "../../assets/images/darkb.jpg";
const HomePage = () => {
  return (
    <SafeAreaView style={GlobalStye.container}>
      <ScrollView style={{ width: "100%", flex: 1 }}>
        <Header />
        <View
          style={
            (GlobalStye.wrapper, [[{ paddingHorizontal: 0, minHeight: 500 }]])
          }
        >
          <ImageBackground
            source={bgImg}
            style={{ width: "100%", height: "100%" }}
          >
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
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 10,
                }}
              >
                A great platform to buy, sell, or even rent your properties
                without any commisions.
              </Text>
              <View
                style={{
                  marginTop: 25,
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
                    <Text style={{ color: "white",fontSize:17,fontWeight:500 }}>Brows properties</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomePage;
