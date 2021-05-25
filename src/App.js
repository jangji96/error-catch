import React from 'react';
import ErrorBoundaray from './ErrorBoundary';
import User from './User'

function App() {
  const user = {
    id: 1,
    username: 'velopert'
  }; 
  // return <User user={user} />
  return (
    <ErrorBoundaray>
      <User />
    </ErrorBoundaray>
  );
}

export default App;
