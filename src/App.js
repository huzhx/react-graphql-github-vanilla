import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const axiosGitHubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
  },
});

function App() {
  const title = 'React GraphQL GitHub Client';
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default App;
