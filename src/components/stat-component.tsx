import React from "react";
import { Box, Center, Text } from "native-base";

type Prosp = {
  description: string;
  value: string;
};

export default function StatComponent(props: Prosp) {
  const { value, description } = props;
  return (
    <Center>
      <Box>
        <Text fontWeight={"extrabold"} fontSize={"2xl"}>
          {value}
        </Text>
      </Box>
      <Box p={1}>{description}</Box>
    </Center>
  );
}
