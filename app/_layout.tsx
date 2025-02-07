import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="loading" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="addPearls" options={{ headerShown: false }} />
      <Stack.Screen name="procedureReviewSummary" options={{ headerShown: false }} />
      <Stack.Screen name="reviewImage" options={{headerShown:false}} />
      <Stack.Screen name ="homePage" options={{ headerShown : false }} />

    </Stack>
  );
}
