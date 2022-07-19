import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { TextField, Button } from '@mui/material';


function App() {
  const [count, setCount] = useState(0)

  return (


    <div className="App">

      <div>
        <TextField id="outlined-basic" label="Adicionar Tarefa" variant="outlined" /><br/>
        <Button variant="contained">Contained</Button>
      </div>

    </div>
  )
}

export default App
