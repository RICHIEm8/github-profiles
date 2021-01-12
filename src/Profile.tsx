import { LinkIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Flex,
  List,
  ListIcon,
  ListItem,
  Stat,
  StatLabel,
  StatNumber,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export const Profile = () => {
  return (
    <Flex justifyContent="space-between">
      <Box pl={10}>
        <Flex>
          <Avatar></Avatar>
          <Text pl="5" pt="3">
            Richiem8
          </Text>
        </Flex>
        <Flex pt="3">
          <Stat className="followers">
            <StatLabel>Followers</StatLabel>
            <StatNumber>3</StatNumber>
          </Stat>
          <Stat className="repositories" pl="5">
            <StatLabel>Repositories</StatLabel>
            <StatNumber>10</StatNumber>
          </Stat>
        </Flex>
      </Box>

      <Box pr={300} mt={-5}>
        <List py={5}>
          <ListItem>
            <ListIcon as={LinkIcon} color="green.500" />
            todo-app
          </ListItem>
          <ListItem>
            <ListIcon as={LinkIcon} color="green.500" />
            calculator-app
          </ListItem>
          <ListItem>
            <ListIcon as={LinkIcon} color="green.500" />
            weather-app
          </ListItem>
          <ListItem>
            <ListIcon as={LinkIcon} color="green.500" />
            github-profiles-app
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
};
