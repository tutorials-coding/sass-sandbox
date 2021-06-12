import { Button } from './components/Button'

import './App.css'

function App() {
  function handleClick() {
    console.log('Save clicked')
  }

  return (
    <div>
      <Button title="Save" onClick={handleClick} size="sm" />
      <Button title="Save" onClick={handleClick} size="md" />
    </div>
  )
}

export default App
