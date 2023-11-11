import { useState } from 'react'
import { Info } from './assets/components/Info'


function App() {
const [showInfo, setShowInfo] = useState(false)

const handlePress = ()=>{
  setShowInfo(true)
}

  return (
    <div className="App">
      {showInfo && <Info name="Yeganeh Daneshparvar" stId={101383730}/>}
      <button type="button" className="btn btn-primary" onClick={handlePress}>Class Info!</button>
      
    </div>
  )
}

export default App
