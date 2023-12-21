import { useContext } from "react"
import { AppContect } from "../App"
import { SetProfile } from "./SetProfile"

export const Profile = (props) => {
    const {profile} = useContext(AppContect)
    return(
        <div>this is me {profile} <SetProfile></SetProfile></div>
    )
}