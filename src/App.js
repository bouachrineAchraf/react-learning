import './App.css';
import { User } from "./user"
import { Planet } from './planet'
import { useState } from "react"

function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("")
  const addTast = () => {

    const taskObject = {
      id: list.length > 0 ? list[list.length - 1].id +1 : 1,
      name : task
    }
    const newlist = [...list, taskObject]
    console.log("🚀 ~ file: App.js:16 ~ addTast ~ ewlist:", newlist)
    setList(newlist);
  }

  const handleTask = (event) => {
    setTask(event.target.value)
  }

  const deleteElement = (id) => {
    const arr = list.filter((task) => {
     return task.id != id
    })
    setList(arr)
  }
  return (
    <div>
      <input onChange={handleTask} />
      <button onClick={addTast}>Add task</button>
      {list.map((element) => {
        return <div>{element.name} <button onClick={() => deleteElement(element.id)}>X</button></div>
      })}
    </div>
  )

}



export default App;
