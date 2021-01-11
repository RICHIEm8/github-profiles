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
  UnorderedList,
} from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';
import React from 'react';

export const Profile = () => {
  return (
    <Flex justifyContent="space-between" border="solid 1px blue">
      <Box border="solid 1px red" pl={5}>
        <Flex>
          <Avatar></Avatar>
          <Text>Richiem8</Text>
        </Flex>
        <Stat>
          <StatLabel>Followers</StatLabel>
          <StatNumber>3</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Repositories</StatLabel>
          <StatNumber>10</StatNumber>
        </Stat>
      </Box>

      <Box border="solid 1px green" pr={300}>
        <List>
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
