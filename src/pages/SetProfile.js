import { useContext } from "react"
import { AppContect } from "../App"
export const SetProfile = (props) => {
    const {setProfile} = useContext(AppContect)

    return(
        <div><input onChange={(event) => setProfile(event.target.value)}/></div>
    )
}