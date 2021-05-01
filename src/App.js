import React from 'react';

function App() {
  return <div>
    <Folder name="Music"/>
    <Folder name="Type"/>
  </div>
}

const Folder = (props) => {
  return <h4>{props.name}</h4>
}

export default App;
