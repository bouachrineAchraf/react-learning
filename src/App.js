import './App.css';
import {User} from "./user"
import {Planet} from './planet'

function App() {
  const planets = [
    {name : "Mars", isAGazPlanet: false},
    {name : "Jupiter", isAGazPlanet: true},
    {name : "Nepton", isAGazPlanet: true}
  ];

  const age = 17;
  const listofname = ["achraf", "oum", "test"]
  const mapofname = [
    { name: "achraf", age: 21 },
    { name: "oum", age: 22 },
    { name: "aadk", age: 23 },
  ]

  return (

    <div>{planets.map((element) => {return <div> {element.isAGazPlanet ? element.name + " is a gaz planet": element.name + " is not a gaz planet"}</div>})}
    
    <div>
      {planets.map((element) => {return <Planet name={element.name} isAGazPlanet={element.isAGazPlanet}></Planet>})}
    </div>
    </div>
    
    // <div style={{ color: age <= 18 ? "red" : "blue" }}>{age >= 18 ? <div>Over Age</div> : <div> under Age</div>}
    //   <div>{age >= 18 ? <button> this is a button</button> : <h1>15</h1>}</div>
    //   {listofname.map((element, value) => {
    //     return <div>{element} : {value}</div>
    //   })}

    //   {mapofname.map((user, index) => {
    //     return <div>{user.name} | {index}</div>
    //   })}

    //   {mapofname.map((user, index) => {
    //     return <User name={user.name} age={user.age}></User>
    //   })}
    // </div>

    // <div className="App">
    //   <User name="achraf" age={23} email="achraf@achraf.com"/>
    //   <User name="test" age={2665} email="jake@achraf.com"/>
    // </div>
  );
}



export default App;
