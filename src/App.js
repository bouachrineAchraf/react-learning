import './App.css';
import {User} from "./user"
import {Planet} from './planet'
import {useEffect, useState} from "react"
import Axios from "axios"

function App() {
 useEffect(() => {
  console.log("componsant mounted");
 }, [])

 //fetch("https://catfact.ninja/fact").then((data) => data.json()).then((data) => console.log(data))
 Axios.get("https://catfact.ninja/fact").then((res) => console.log("axios object : ", res.data))
 return (
  <div> i am APP component</div>
  )
   
}



export default App;
