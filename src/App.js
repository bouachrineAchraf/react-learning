import './App.css';
import {User} from "./user"
import {Planet} from './planet'
import {useState} from "react"

function App() {
 const [list, setList] = useState([]);
const [task, setTask] = useState("")
 const addTast = () => {
  const newlist = [...list, task]
  setList(newlist);

 }

 const handleTask = (event) => {
  setTask(event.target.value)  

 }
  return (
  <div>
    <input onChange={handleTask}/>
    <button onClick={addTast}>Add task</button>
    {list}
  </div>
  )
   
}



export default App;
