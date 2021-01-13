import { Alert, AlertIcon, AlertTitle, Button, Flex, Heading, Input } from '@chakra-ui/react';
import React, { FormEvent, useState } from 'react';
import { combinedGitData, GitData } from './api/github';
import { Profile } from './Profile';

export const App = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState<GitData>();
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (username: string) => {
    try {
      const gitUserData = await combinedGitData(username);
      setData(gitUserData);
      setError(null);
    } catch (err) {
      setError(err);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetchData(query);
    setQuery('');
  };

  return (
    <Flex fontSize="xl" flexDirection="column">
      <Flex justifyContent="center" my={3}>
        <Heading>Github Profiles</Heading>
      </Flex>
      <Flex justifyContent="center" borderBottom="solid 1px black">
        <form onSubmit={onSubmit}>
          <Input
            placeholder="Search user..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            w={300}
            mb={5}
          />
          <Button type="submit">Search</Button>
        </form>
      </Flex>
      {error ? (
        <Alert status="error" justifyContent="center">
          <AlertIcon />
          <AlertTitle>
            {error.message} - Ensure username is correct or refer to error code.
          </AlertTitle>
        </Alert>
      ) : null}
      {data ? (
        <Profile
          avatar={data.avatar}
          username={data.username}
          profile_url={data.profile_url}
          name={data.name}
          bio={data.bio}
          followers={data.followers}
          repoCount={data.repoCount}
          repositories={data.repositories}
        />
      ) : null}
    </Flex>
  );
};
