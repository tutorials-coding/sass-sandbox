import { ButtonShowroom } from './components/Button/ButtonShowroom'
import { CardShowroom } from './components/Card/CardShowroom'

import './App.css'

function App() {
  function handleClick() {
    console.log('Save clicked')
  }

  return (
    <div className="main-container">
      <ButtonShowroom />
      <CardShowroom />
    </div>
  )
}

export default App
