import { Stack } from "expo-router";
import { useAppDispatch } from "../redux/store";
import { useEffect } from "react";
import { getUser } from "../redux/actions/user.action";

export default function AppWrapper() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
