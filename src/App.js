import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import Auth from './hoc/Auth';
import NaverLogin from './Login/NaverLogin/NaverLogin';
import CounterContainer from './CounterContainer'
import PreferenceContainer from './Components/PreferenceContainer'
import Main from './Components/Main';
import PrivateRoute from "./Components/common/PrivateRoute";

function App() {
  return (
    // <div className="App">
    //   <NaverLogin></NaverLogin>
    // </div>
    <Router>
      <div>
        <Switch>
          <PrivateRoute exact path="/" component={Main}/>
          <Route exact path="/login" component={NaverLogin}/>
          <Route exact path="/counter" component={CounterContainer}/> 
          <PrivateRoute exact path="/preference" component={PreferenceContainer}/> 
          <PrivateRoute exact path="/list" component={Main}/> 
        </Switch>
      </div>
    </Router>
  );
}


export default App;
