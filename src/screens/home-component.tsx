import React from "react";
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
} from "native-base";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import StatComponent from "../components/stat-component";
import Fontisto from "@expo/vector-icons/Fontisto";

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
        <Heading textAlign={"center"} size={"2xl"}>
          Password AI
        </Heading>
        <Text textAlign={"center"} fontStyle={"italic"}>
          V2.0
        </Text>
        <Text textAlign={"center"}>
          ¡Tu superHéroe digital de las contraseñas!
        </Text>
      </Box>
      <Box mt={{ base: 2, md: 30 }} width={"90%"} margin={"auto"}>
        <Input
          textAlign={"center"}
          fontSize={"3xl"}
          value="KJDJH72N23LK3"
          pointerEvents={"none"}
          size={"2xl"}
          height={100}
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
      <Divider my={5} />
      <Box width={{ base: "80%" }} margin={"auto"} mt={10}>
        <Button
          bg={"#176BEF"}
          _pressed={{
            bg: "#179c52",
          }}
          rightIcon={<Fontisto name="google" size={24} color="white" />}
        >
          <Text color={"white"}>Accede con tu cuenta Google</Text>
        </Button>
      </Box>
    </Box>
  );
}
