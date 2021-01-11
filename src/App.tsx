import { Box, Button, Flex, Heading, Input } from '@chakra-ui/react';
import React from 'react';
import { Profile } from './Profile';

export const App = () => (
  <Box fontSize="xl">
    <Heading textAlign="center">Github Profiles</Heading>
    <Flex m={3}>
      <Input />
      <Button>Search</Button>
    </Flex>
    <Profile />
  </Box>
);
