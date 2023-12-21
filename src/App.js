import './App.css';
import {User} from "./user"
import {Planet} from './planet'
import {useEffect, useState} from "react"
import Axios from "axios"

function App() {
 const [name, setName] = useState("")
 const [age, setAge] = useState("")
const fetch = () => {
  Axios.get("https://api.agify.io/?name="+name).then((res) => setAge(res.data.age))
}
 return (
  <div> 
    <input placeholder='ex, achraf' onChange={(event) => setName(event.target.value)}/>
    <button onClick={fetch}>Get Age</button>
    <div>the age of {name} is : {age} </div>
  </div>
  )
   
}



export default App;
