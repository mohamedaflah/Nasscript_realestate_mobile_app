import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomePage = () => {
  return (
    <SafeAreaView>
      <Text>Index and HOmePage</Text>
      <Link href={"/users"}>Go to user</Link>
      <Pressable onPress={() => router.push("/users")}>
        <Text>Go to user with router not link</Text>
      </Pressable>
    </SafeAreaView>
  );
};
export default HomePage;
