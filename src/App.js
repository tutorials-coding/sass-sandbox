import { Button } from './components/Button'

import './App.css'

function App() {
  function handleClick() {
    console.log('Save clicked')
  }

  return (
    <div className="main-container">
      <Button title="Confirm changes" onClick={handleClick} size="sm" />
      <Button title="Confirm changes" onClick={handleClick} size="md" />
      <Button title="Confirm changes" onClick={handleClick} size="lg" />
    </div>
  )
}

export default App
