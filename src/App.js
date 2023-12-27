import './App.css';
import { useEffect, useState} from "react"
import {useCount} from './useCounthook'

function App() {
  const [val, increase, decrease, restart] = useCount(0)
  return (
    <div >
      {val}
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={restart}>restart</button>
    </div>
  )

}



export default App;
