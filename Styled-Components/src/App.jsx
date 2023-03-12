import { useState } from 'react'
import { Container, Button, List } from './App.style'
import Image from './assets/people.svg'

function App() {
  const [ coment, setComent ] = useState()
  const [ allComents, setAllComents ] = useState([])

  const handleTextArea = (event) => {
    setComent(event.target.value)
  }

  const handleClickButton = () => {
    const allOldComments = [...allComents, coment]
    setAllComents(allOldComments)
  }

  return (
   <Container>
    <img src={Image} alt="Image-pessoas" />
    <textarea onChange={handleTextArea}></textarea>
    {coment ? (
      <Button isOn={coment} onClick={handleClickButton}>Comentar</Button>
    ): (
      <Button disabled>Comentar</Button>
    )}

    <List>
      {
        allComents.map((cmt, index) => (
          <li key={index}>{cmt}</li>
        ))
      }
    </List>
   </Container>
  )
}

export default App
