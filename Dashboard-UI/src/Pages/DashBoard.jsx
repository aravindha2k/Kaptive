import React from 'react';
import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar from '../Components/SideBar';

const DashBoard = ({ onLogout }) => {
  return (
    <Flex>
      <Sidebar onLogout={onLogout} />
      <Box w="80%" p={5}>
        <Outlet />
      </Box>
    </Flex>
  );
};

export default DashBoard;
