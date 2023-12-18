import './App.css';

function App() {
  const age = 17;
  const listofname = ["achraf", "oum", "test"]
  const mapofname = [
    { name: "achraf", age: 21 },
    { name: "oum", age: 22 },
    { name: "aadk", age: 23 },
  ]

  return (
    <div style={{ color: age <= 18 ? "red" : "blue" }}>{age >= 18 ? <div>Over Age</div> : <div> under Age</div>}
      <div>{age >= 18 ? <button> this is a button</button> : <h1>15</h1>}</div>
      {listofname.map((element, value) => {
        return <div>{element} : {value}</div>
      })}

      {mapofname.map((user, index) => {
        return <div>{user.name} | {index}</div>
      })}

      {mapofname.map((user, index) => {
        return <User name={user.name} age={user.age}></User>
      })}
    </div>

    // <div className="App">
    //   <User name="achraf" age={23} email="achraf@achraf.com"/>
    //   <User name="test" age={2665} email="jake@achraf.com"/>
    // </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.email}</h3>
    </div>
  )
}

export default App;
