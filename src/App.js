import { BrowserRouter,Route, Switch} from "react-router-dom";
import Homie from "./LandingPage/landing_page";
import Postview from "./PostView/Postview";
const App = () => { 
  return (<>
   <BrowserRouter>
   <Switch>
    <Route exact path="/" component={Homie} ></Route>
    <Route path="/post" component={Postview} ></Route>
   </Switch> 
   </BrowserRouter>


   </>)
}

export default App;
