import './App.css';

function App() {
  const age = 19;

  return (
    <div>{age >= 18 ? <div>Over Age</div> : <div> under Age</div> }</div>
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
