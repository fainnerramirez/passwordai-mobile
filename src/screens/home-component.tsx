import React, { useEffect } from "react";
import {
  Box,
  Button,
  Card,
  Center,
  Divider,
  Heading,
  HStack,
  Icon,
  Input,
  Text,
  VStack,
} from "native-base";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import StatComponent from "../components/stat-component";
import Fontisto from "@expo/vector-icons/Fontisto";
import CreateAccount from "../components/create-account";
import { auth } from "../firebase/firebase.config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const dataStat = [
  {
    id: 1,
    value: 1200,
    description: "Usuarios",
  },
  {
    id: 2,
    value: 500,
    description: "Contraseñas",
  },
  {
    id: 3,
    value: "99.99%",
    description: "Seguridad",
  },
];

export default function HomeComponent() {
  const [password, setPassword] = React.useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setPassword(generateRandomPassword());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const generateRandomPassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    return Array(12)
      .fill(0)
      .map(() => chars[Math.floor(Math.random() * chars.length)])
      .join("");
  };

  const handleAuthGoogle = async () => {
    // Authenticate with Google
    console.log("Authenticating with Google...");
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      console.log("Result: ", result);
    } catch (error) {
      console.error("Error authenticating with Google: ", error);
    }
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignContent={"center"}
      width={"90%"}
      height={"80%"}
      margin={"auto"}
      bg={"white"}
    >
      <Box p={5}>
        <Heading
          textAlign={"center"}
          size={"2xl"}
          fontFamily={"Parkinsans-Medium"}
        >
          Password AI
        </Heading>
        <Text textAlign={"center"} fontStyle={"italic"}>
          V2.0
        </Text>
        <Text textAlign={"center"}>
          ¡Tu superHéroe digital de las contraseñas!
        </Text>
      </Box>
      <Box
        mt={{ base: 2, md: 30 }}
        width={"90%"}
        margin={"auto"}
        pointerEvents={"none"}
      >
        <Input
          textAlign={"center"}
          fontFamily={"Parkinsans"}
          fontSize={"3xl"}
          value={password}
          size={"2xl"}
          height={100}
          textDecoration={"none"}
        />
      </Box>
      <HStack
        mt={{ base: 5, md: 30 }}
        margin={"auto"}
        width={"90%"}
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
        space={10}
      >
        <Center>
          <Box borderRadius={"full"} bg={"blue.100"} p={3}>
            <MaterialIcons name="security" size={40} color="black" />
          </Box>
          <Box>
            <Text>Seguro</Text>
          </Box>
        </Center>
        <Divider
          orientation="vertical"
          mx="-2"
          _light={{
            bg: "muted.800",
          }}
          _dark={{
            bg: "muted.50",
          }}
        />
        <Center>
          <Box borderRadius={"full"} bg={"blue.100"} p={3}>
            <FontAwesome5 name="shipping-fast" size={40} color="black" />
          </Box>
          <Box>
            <Text>Rápido</Text>
          </Box>
        </Center>
        <Divider
          orientation="vertical"
          mx="-4"
          _light={{
            bg: "muted.800",
          }}
          _dark={{
            bg: "muted.50",
          }}
        />
        <Center>
          <Box borderRadius={"full"} bg={"blue.100"} p={3}>
            <Ionicons name="keypad" size={40} color="black" />
          </Box>
          <Box>
            <Text>Único</Text>
          </Box>
        </Center>
      </HStack>
      <Box p={5}>
        <Text textAlign={"center"}>
          Únete a la revolución de la seguridad digital. Nuestras contraseñas
          con IA son tan buenas, ¡que hasta los hackers querrán ser tus amigos!
        </Text>
      </Box>
      <Divider my={5} />
      <HStack space={10} justifyContent={"center"}>
        {dataStat.map((data) => {
          return (
            <StatComponent
              key={data.id}
              value={data.value.toString()}
              description={data.description}
            />
          );
        })}
      </HStack>
      <Divider my={4} />
      <VStack space={4}>
        <Box width={{ base: "80%" }} margin={"auto"}>
          <Button
            onPress={() => handleAuthGoogle()}
            bg={"#176BEF"}
            _pressed={{
              bg: "#179c52",
            }}
            rightIcon={<Fontisto name="google" size={24} color="white" />}
          >
            <Text color={"white"}>Accede con tu cuenta Google</Text>
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}
