import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
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
              style={{ width: "100%", marginTop: 18, paddingHorizontal: 23,display:"flex" }}
            >
              <Text style={{ color: "white", fontSize: 43,fontWeight:"bold" }}>
                Buy, rent, or sell your property easily
              </Text>
              <Text style={{ color: "white", fontSize: 20,fontWeight:"bold",marginTop:10 }}>
              A great platform to buy, sell, or even rent your properties without any commisions.
              </Text>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomePage;
