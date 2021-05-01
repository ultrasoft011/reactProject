import React from 'react';

function App() {
  return <div>
    <Folder name="Emotions">
      <File name="Happy Chill"/>
      <File name="Melancolic"/>
    </Folder>
    <Folder name="Groups">
      <File name="Beats"/>
    </Folder>
  </div>
}

const Folder = (props) => {
  const borderStyle = { border: '2px solid pink' };
  return <div style = {borderStyle}> 
    <h1>{props.name}</h1>
    {props.children}
  </div>
};

const File = (props) => {
  return <div>
    {props.name}
  </div>
}

export default App;
