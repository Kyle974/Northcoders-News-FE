import React from 'react';

const Error = ({ location }) => {
  return (
    <div>
      {location.state && (
        <div>
          <h1>{location.state.status}</h1> <h2>{location.state.msg}</h2>
        </div>
      )}
    </div>
  );
};

export default Error;
