import {  useHistory } from "react-router-dom"
import './landing.css'
const Homie = () =>
{ 
    const history = useHistory();
    const redirect = () =>
    {
       history.push("/post")
    }
    return <>
     <div className="panda">
     <img src="sample.jpg" alt="oops"></img>
     <div className="left">
     <h1>10x Team 04</h1>
    <button onClick={redirect} >Enter</button>
    </div>
    </div>
    </>
}
export default Homie;