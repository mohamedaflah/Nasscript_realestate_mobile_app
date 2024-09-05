import { Stack } from "expo-router";
import AppWrapper from "./AppWrapper";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const RootLayout = () => {
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
};

export default RootLayout;
