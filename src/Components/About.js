import React from 'react'
import useDisplayModes from './useDisplayModes';
import MiniNav from './MiniNav';


const About = () => {

  const [design, handleClick, btnText] = useDisplayModes();

  return (
    <div style={design}>
      <MiniNav nightMode={design} click={handleClick} text={btnText}/>
      This is about page
    </div>
  )
}

export default About
