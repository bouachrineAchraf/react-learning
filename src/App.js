import './App.css';
import { User } from "./user"
import { Planet } from './planet'
import { useState } from "react"

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

  const deleteElement = (element) => {
    const arr = list.filter((name) => {
      if (name == element) {
        return false
      }
      else return true 
    })
    setList(arr)
  }
  return (
    <div>
      <input onChange={handleTask} />
      <button onClick={addTast}>Add task</button>
      {list.map((element) => {
        return <div>{element} <button onClick={() => deleteElement(element)}>X</button></div>
      })}
    </div>
  )

}



export default App;
