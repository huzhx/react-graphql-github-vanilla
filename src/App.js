import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Organization from './Organization';

const axiosGitHubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
  },
});

const GET_ORG = `
{
  organization(login: "the-road-to-learn-react") {
    name
    url
  }
}
`;

function App() {
  const title = 'React GraphQL GitHub Client';

  const [url, setUrl] = useState('');
  const [org, setOrg] = useState(null);
  const [errors, setErrors] = useState(null);

  const handleChange = (event) => {
    setUrl(event.target.value);
  };
  const handleSubmit = () => {
    // * fetch data here
  };

  useEffect(() => {
    axiosGitHubGraphQL.post('', { query: GET_ORG }).then((res) => {
      console.log(res);
      setOrg(res.data.data.organization);
      setErrors(res.data.errors);
    });
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="url">Show open issues for https://github.com/</label>
        <input id="url" type="text" value={url} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <hr />
      {org ? <Organization org={org} errors={errors} /> : <p>No information yet ...</p>}
    </div>
  );
}

export default App;
