import { Box, Button, Flex, Heading, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Profile } from './Profile';
import { combinedGitData, GitData } from './api/github';

export const App = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState<GitData>();
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (username: string) => {
    try {
      const gitUserData = await combinedGitData(username);
      setData(gitUserData);
      setError(null);
      console.log(data);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <Box fontSize="xl">
      <Heading textAlign="center">Github Profiles</Heading>
      <Flex m={3}>
        <Input
          placeholder="Search user..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <Button onClick={(e) => fetchData(query)}>Search</Button>
      </Flex>
      <Profile />
    </Box>
  );
};
