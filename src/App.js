import './App.css';
import { User } from "./user"
import { Planet } from './planet'
import { useState } from "react"
import {Task} from "./task"

function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("")
  const addTast = () => {

    const taskObject = {
      id: list.length > 0 ? list[list.length - 1].id +1 : 1,
      name : task
    }
    const newlist = [...list, taskObject]
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
        return <Task element={element} delete={deleteElement}></Task>
      })}
    </div>
  )

}



export default App;
