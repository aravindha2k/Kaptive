import React from 'react';
import { Box, Button, Input, VStack } from "@chakra-ui/react";

const Login = ({ onLogin }) => {

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minH="100vh" bg="gray.100">
      <Box p={8} maxW="md" borderWidth={1} borderRadius={8} boxShadow="lg" bg="white">
        <VStack spacing={4}>
          <Input placeholder="Username" />
          <Input placeholder="Password" type="password" />
          <Button onClick={onLogin} colorScheme="teal">Login</Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Login;
