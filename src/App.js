import './App.css';
import {User} from "./user"
import {Planet} from './planet'
import {useState} from "react"

function App() {
 const [input, setInput] = useState("")
 const changeText = (event) => {
  setInput(event.target.value)
 } 
 return (
    <div>
      <input type="text" onChange={changeText}/>
      {input}
    </div>
  )
   
}



export default App;
