import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="loading" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ title: "Home" }} />
    </Stack>
  );
}
