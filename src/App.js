import './App.css';
import {User} from "./user"
import {Planet} from './planet'
import {useState} from "react"

function App() {
 const [state, setState] = useState(true);
 const changeState = () => {
  setState(!state)
 }
 const [input, setInput] = useState("")
 const changeText = (event) => {
  setInput(event.target.value)
 } 
 return (
    <div>
      <button onClick={changeState}>click here</button>
      <div>{state && <div>hey text</div>}</div>

      <input type="text" onChange={changeText}/>
      {input}
    </div>
  )
   
}



export default App;
