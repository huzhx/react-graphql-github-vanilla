import React from 'react';

const Repository = ({ repo }) => {
  return (
    <div>
      <p>
        <strong>In Repository:</strong>
        <a href={repo.url}>{repo.name}</a>
      </p>
      <ul>
        {repo.issues.edges.map((issue) => (
          <li key={issue.node.id}>
            <a href={issue.node.url}>{issue.node.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Repository;
