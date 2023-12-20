import './App.css';
import {User} from "./user"
import {Planet} from './planet'
import {useState} from "react"

function App() {
 const [num, setNum] = useState(0);

 const Increase = () => {
  setNum(num+1)
 }
 
 const Decrease = () => {
  setNum(num-1)
 }

 const SetToZero = () => {
  setNum(0)
 }
 return (
    <div>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
      <button onClick={SetToZero}>Set To Zero</button>
      {num}
    </div>
  )
   
}



export default App;
