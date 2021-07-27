import { Component} from "react";
import Home from "./components/Home";

// react-router-dom add 
import { BrowserRouter, Route,Switch} from "react-router-dom";

class App extends Component{
   render(){
       return(
          <BrowserRouter>
            <Switch>
            <Route path ='/' component ={Home} exact />
            </Switch>
          </BrowserRouter>
       );
   }
}
export default App;