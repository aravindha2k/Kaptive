import React from 'react';
import { Box, VStack, Avatar, Button, Text, background } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaChartBar, FaTable, FaFileAlt, FaBullseye, FaSignOutAlt } from 'react-icons/fa'; // Added FaSignOutAlt

const Sidebar = ({ onLogout }) => {
  const activeStyle = { backgroundColor: "#8c8eee" , display: 'flex', alignItems: 'center', color: 'white', padding: "7px", borderRadius:"6px"}
  const defaultStyle = { backgroundColor: "#676af5", display: 'flex', alignItems: 'center', color: 'white', padding: "7px", borderRadius:"6px"}
  return (
    <Box w="20%" bg="#676af5" color="white" p={5} minH="100vh" display="flex" flexDirection="column" boxShadow="md" > 
      <Text fontSize="2xl" mb={5} fontWeight="bold">PLSE</Text>
      <VStack spacing={4} align="stretch" flex="1">
        <NavLink to="/charts" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
          <FaChartBar style={{ marginRight: '8px' }} />
          Charts
        </NavLink>
        <NavLink to="/tables" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
          <FaTable style={{ marginRight: '8px' }} />
          Tables
        </NavLink>
        <NavLink to="/reports" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
          <FaFileAlt style={{ marginRight: '8px' }} />
          Reports
        </NavLink>
        <NavLink to="/forecast" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
          <FaBullseye style={{ marginRight: '8px' }} />
          Forecast
        </NavLink>
      </VStack>
      <Box textAlign="center" display="flex" alignItems="center" mt={4}> {/* Added alignItems="center" and mt={4} */}
        <Avatar name="Aravindhakshan M" src="" mr={3} mb={3} />
        <Box>
          <Text>Aravindhakshan</Text>
          <Text>User</Text>
        </Box>
      </Box>
      <Button mt={4} onClick={onLogout} colorScheme="red">
      <FaSignOutAlt style={{ marginLeft: '8px', marginRight: '8px', cursor: 'pointer' }} onClick={onLogout} />
      Logout
      </Button>
    </Box>
  );
};

export default Sidebar;
