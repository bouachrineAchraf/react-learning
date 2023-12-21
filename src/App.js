import './App.css';
import {User} from "./user"
import {Planet} from './planet'
import {useEffect, useState} from "react"

function App() {
 useEffect(() => {
  console.log("componsant mounted");
 }, [])
 return (
  <div> i am APP component</div>
  )
   
}



export default App;
