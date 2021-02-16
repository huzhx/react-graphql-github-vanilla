import React, { useState } from 'react';
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

  const [url, setUrl] = useState('');
  const handleChange = (event) => {
    setUrl(event.target.value);
  };
  const handleSubmit = () => {
    // * fetch data here
  };

  return (
    <div>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="url">Show open issues for https://github.com/</label>
        <input id="url" type="text" value={url} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <hr />
    </div>
  );
}

export default App;
