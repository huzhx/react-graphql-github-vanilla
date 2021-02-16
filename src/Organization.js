import React from 'react';

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
    </div>
  );
};

export default Organization;
