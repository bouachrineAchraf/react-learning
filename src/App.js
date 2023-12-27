import './App.css';
import { useEffect, useState} from "react"


function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div >
      <button onClick={() => {setIsVisible((value) => !value)}}>{isVisible ? "Hide" : "Show"}</button>
      <p>{isVisible && <h1>Hi Achraf .</h1>}</p>
    </div>
  )

}



export default App;
