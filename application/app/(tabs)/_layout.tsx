import { Tabs } from "expo-router";
import {
  HomeIcon,
  UserIcon,
  UserPlusIcon,
  UserMinusIcon,
} from "react-native-heroicons/outline"; // Import icons
import { useAppSelector } from "../../redux/store";
import { Pressable, Text } from "react-native";

const TabsLayout = () => {
  const { user, isVerified } = useAppSelector((state) => state.user);
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 10,
          height: 64,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          title: "Login",
          tabBarIcon: ({ color, size }) => (
            <UserIcon color={color} size={size} />
          ),
          tabBarButton: (props) => {
            if (!user || !user._id || !isVerified) {
              return <Pressable {...props} />;
            }
            return null;
          },
        }}
      />
      <Tabs.Screen
        name="signup"
        options={{
          title: "Signup",
          tabBarIcon: ({ color, size }) => (
            <UserPlusIcon color={color} size={size} />
          ),
          tabBarButton: (props) => {
            if (!user || !user._id || !isVerified) {
              return <Pressable {...props} />;
            }
            return null;
          },
        }}
      />
      <Tabs.Screen
        name="property/[id]"
        options={{
          title: "detail",

          tabBarButton: () => null,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
