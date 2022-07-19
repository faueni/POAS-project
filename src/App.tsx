import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Checkbox from './components/checkbox'
import { TextField, Button } from '@mui/material';


function App() {
  const [count, setCount] = useState(0)

  return (


    <div className="App">
      <TextField id="outlined-basic" label="Adicionar Tarefa" variant="outlined" /><br/>
      <Button variant="contained">Adicionar</Button>
      <hr/>
      <Checkbox />

    </div>
  )
}

export default App
