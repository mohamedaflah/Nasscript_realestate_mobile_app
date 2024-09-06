import { Tabs } from "expo-router";
import {
  HomeIcon,
  UserIcon,
  UserPlusIcon,
} from "react-native-heroicons/outline"; // Import icons

const TabsLayout = () => {
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
        }}
      />
      <Tabs.Screen
        name="signup"
        options={{
          title: "Signup",
          tabBarIcon: ({ color, size }) => (
            <UserPlusIcon color={color} size={size} />
          ),
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
