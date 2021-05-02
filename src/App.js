import React, {useState} from 'react';

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
	const [ isOpen, setIsOpen ] = useState(false);
	const { name, children } = props;

	{/* Function to handle the click */}
	const handleClick = () => {
		setIsOpen(!isOpen);
	}
return <div>
    <span onClick={handleClick}>{name}</span>
    <div style={{ marginLeft: '2%'}}>
		{ isOpen ? children: null}
    </div>
  </div>
};

const File = (props) => {
  return <div>
    {props.name}
  </div>
}

export default App;
