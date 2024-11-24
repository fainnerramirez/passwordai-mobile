import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Box, Button, Heading, NativeBaseProvider, Text } from "native-base";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import HomeComponent from "./src/screens/home-component";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <SafeAreaView>
          <Box flex={1}>
            <HomeComponent />
          </Box>
        </SafeAreaView>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
