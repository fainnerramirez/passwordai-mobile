import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Box, Button, Heading, NativeBaseProvider, Text } from "native-base";
import HomeComponent from "./src/screens/home-component";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Box flex={1}>
          <HomeComponent />
        </Box>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
