import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Center, Modal, Input, FormControl, Stack } from "native-base";

export default function CreateAccount() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <Center>
      <Button
        onPress={() => setShowModal(true)}
        variant={"outline"}
        width={"80%"}
        color={"blue.900"}
      >
        Crear Cuenta
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        _backdrop={{
          _dark: {
            bg: "coolGray.800",
          },
          bg: "warmGray.50",
        }}
        size={"xl"}
      >
        <Modal.Content height={"auto"}>
          <Modal.CloseButton />
          <Modal.Header>Bienvenido a Password AI</Modal.Header>
          <Modal.Body>
            <FormControl>
              <Stack space={5}>
                <Stack>
                  <FormControl.Label>Correo</FormControl.Label>
                  <Input
                    size={"lg"}
                    variant="filled"
                    p={2}
                    placeholder="Correo electrónico"
                  />
                </Stack>
                <Stack>
                  <FormControl.Label>Contraseña</FormControl.Label>
                  <Input
                    type="password"
                    variant="filled"
                    size={"lg"}
                    p={2}
                    placeholder="Contraseña"
                  />
                </Stack>
                <Stack>
                  <FormControl.Label>Confirmar Contraseña</FormControl.Label>
                  <Input
                    type="password"
                    size={"lg"}
                    variant="filled"
                    p={2}
                    placeholder="Confirma la contraseña"
                  />
                </Stack>
              </Stack>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancelar
              </Button>
              <Button
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Crear Cuenta
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
}
