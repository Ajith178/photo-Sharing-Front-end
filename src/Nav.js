import { Link, useHistory } from "react-router-dom";

const Nav = () =>
{
    const history = useHistory();
    const redirect = () =>
    {
        history.push("/courses")
    }
  return (<>
  <ul>
    <li>
        <Link to="/home">Home</Link>
    </li>
  </ul>
  <button onClick={redirect} >Page</button>
  </>)
}
export default Nav;