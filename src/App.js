import './App.css';
import {User} from "./user"
import {Planet} from './planet'
import {useEffect, useState} from "react"
import Axios from "axios"

function App() {
  const [fact, setFact] = useState("")
  const fetch = () => {
   Axios.get("https://catfact.ninja/fact").then((res) => setFact(res.data.fact))
  }
 useEffect(() => {
  console.log("componsant mounted");
 }, [])

 //fetch("https://catfact.ninja/fact").then((data) => data.json()).then((data) => console.log(data))
 Axios.get("https://catfact.ninja/fact").then((res) => console.log("axios object : ", res.data))
 return (
  <div> 
    <button onClick={fetch}>Generate Cat Fact</button>
    <div>{fact}</div>
  </div>
  )
   
}



export default App;
