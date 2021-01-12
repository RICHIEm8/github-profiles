import axios from 'axios';
import _ from 'lodash';

interface GithubUserResponse {
  avatar_url: string;
  login: string;
  name: string;
  bio: string;
  followers: number;
  public_repos: number;
}

interface GithubUserRepoResponse {
  name: string;
  stargazers_count: number;
  forks_count: number;
  description: string;
}

export interface GitData {
  avatar: string;
  username: string;
  name: string;
  bio: string;
  followers: number;
  repoCount: number;
  repositories: GithubUserRepoResponse[];
}

const githubUser = async (username: string): Promise<GithubUserResponse> => {
  const data = await axios.get(`https://api.github.com/users/${username}`);
  return data.data;
};

const githubUserRepos = async (username: string): Promise<GithubUserRepoResponse[]> => {
  const data = await axios.get(`https://api.github.com/users/${username}/repos`);
  return data.data;
};

export const combinedGitData = async (username: string): Promise<GitData> => {
  const user = await githubUser(username);
  const { avatar_url, login, name, bio, followers, public_repos } = user;
  const repositories = await githubUserRepos(username);
  const filteredRepos = _.orderBy(repositories, ['stargazers_count'], ['desc']).slice(0, 4);

  const data = {
    avatar: avatar_url,
    username: login,
    name,
    bio,
    followers,
    repoCount: public_repos,
    repositories: filteredRepos,
  };
  return data;
};
