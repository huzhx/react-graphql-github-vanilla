import React from 'react';

const Repository = ({ repo }) => {
  return (
    <div>
      <p>
        <strong>In Repository:</strong>
        <a href={repo.url}>{repo.name}</a>
      </p>
    </div>
  );
};

export default Repository;
