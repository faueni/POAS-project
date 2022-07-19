import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { TextField } from '@mui/material';
import Checkbox from './components/checkbox'

function App() {
  const [count, setCount] = useState(0)

  return (


    <div className="App">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />

      <Checkbox />

      
    </div>
  )
}

export default App
