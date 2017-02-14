import React from 'react';

// Debugger used to display the entire app state
const AppState = (props) => {
  return (
    <div>
      <h2>Raw App State</h2>
      <pre>{ JSON.stringify(props.state, null, 2)}</pre>
    </div>
  );
}

export default AppState;