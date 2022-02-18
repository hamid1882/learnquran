import {useState} from 'react'

const DisplayModes = () => {
  const [design, setDesign] = useState({
    backgroundColor: 'white',
    color: 'black',
    textDecoration: "none"
  });
  const [btnText, setbtnText] = useState('Night Mode')

  const handleClick = () => {
    if(design.color === 'black') {
      setDesign({
        backgroundColor: 'black',
        color: 'white',
        textDecoration: "none", 
        paddingBottom: '10px'
      })
      localStorage.setItem("mode",btnText)
      setbtnText(' Light Mode')
    } else {
      setDesign({
        backgroundColor: 'white',
        color: 'black',
        textDecoration: "none"
      })
      localStorage.setItem("mode",btnText)
      setbtnText('Night Mode')
    }
  }
  
  

  return [design, handleClick, btnText];
}

export default DisplayModes
