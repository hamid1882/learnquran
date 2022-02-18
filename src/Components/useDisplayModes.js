import {useState} from 'react'

const DisplayModes = () => {
  const [design, setDesign] = useState({
    backgroundColor: 'white',
    color: 'black',
    textDecoration: "none"
  });
  const [btnText, setbtnText] = useState('Night Mode')
    localStorage.setItem("mode",btnText)

  

  const handleClick = () => {
    if(design.color === 'black') {
      setDesign({
        backgroundColor: 'black',
        color: 'white',
        textDecoration: "none", 
        paddingBottom: '10px'
      })
      setbtnText(' Light Mode')
    } else {
      setDesign({
        backgroundColor: 'white',
        color: 'black',
        textDecoration: "none"
      })
      setbtnText('Night Mode')
    }
  }
  
  

  return [design, handleClick, btnText];
}

export default DisplayModes
