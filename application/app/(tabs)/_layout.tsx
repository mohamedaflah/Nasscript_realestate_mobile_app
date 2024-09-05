import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="login" />
      <Tabs.Screen name="signup" />
    </Tabs>
  );
};

export default TabsLayout;
