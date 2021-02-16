import React from 'react';

import Repository from './Repository';

const Organization = ({ org, errors }) => {
  if (errors) {
    return (
      <p>
        <strong>Something went wrong:</strong>
        {errors.map((error) => error.message).join(' ')}
      </p>
    );
  }

  return (
    <div>
      <p>
        <strong>Issues from Organization:</strong>
        <a href={org.url}>{org.name}</a>
      </p>
      <Repository repo={org.repository} />
    </div>
  );
};

export default Organization;
