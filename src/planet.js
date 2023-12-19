export const Planet = (props) => {
    return (
      <div>
        <h1>{props.name}</h1> <h2>{props.isAGazPlanet ? "is a gaz planet" : "is not a gaz planet"}</h2>
      </div>
    )
  }