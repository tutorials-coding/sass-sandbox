import { Button } from './components/Button'

import './App.css'

function App() {
  function handleClick() {
    console.log('Save clicked')
  }

  return (
    <div>
      <Button title="Save" onClick={handleClick} />
    </div>
  )
}

export default App
