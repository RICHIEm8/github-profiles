import { LinkIcon, StarIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Flex,
  Link,
  List,
  ListIcon,
  ListItem,
  Stat,
  StatLabel,
  StatNumber,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import _ from 'lodash';
import { GithubUserRepoResponse } from './api/github';

interface Props {
  avatar: string;
  username: string;
  profile_url: string;
  name: string;
  bio: string;
  followers: number;
  repoCount: number;
  repositories: GithubUserRepoResponse[];
}

export const Profile = (props: Props) => {
  const { avatar, username, profile_url, name, bio, followers, repoCount, repositories } = props;
  const topRepos = _.map(repositories, (repo) => {
    return (
      <ListItem key={repo.name}>
        <ListIcon as={LinkIcon} color="green.500" />
        <Link href={repo.html_url}>{repo.name}</Link> <ListIcon as={StarIcon} color="yellow.500" />{' '}
        {repo.stargazers_count}
      </ListItem>
    );
  });
  return (
    <Flex justify="space-around" px={'10%'}>
      <Flex flexDir="column" mt={5} ml={10} w={400}>
        <Flex>
          <Avatar src={avatar} size="2xl" />
          <Flex flexDir="column" pl={5} justify="center">
            <Text fontSize={25}>{name}</Text>
            <Text pt="3" textDecor="underline">
              <Link href={profile_url}>@{username}</Link>
            </Text>
            <Text pt={5} fontSize={10}>
              {bio}
            </Text>
          </Flex>
        </Flex>
        <Flex justify="space-between" pt={5}>
          <Stat>
            <StatLabel>Followers</StatLabel>
            <StatNumber>{followers}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Repositories</StatLabel>
            <StatNumber>{repoCount}</StatNumber>
          </Stat>
        </Flex>
      </Flex>
      <Flex>
        <List pt={5} spacing={5}>
          {topRepos}
        </List>
      </Flex>
    </Flex>
  );
};
