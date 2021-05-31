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
import MapContainer from './Components/MapContainer';
import WriteContainer from './Components/WriteContainer';

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
          <PrivateRoute exact path="/map" component={MapContainer}/> 
          <PrivateRoute exact path="/write" component={WriteContainer}/> 
        </Switch>
      </div>
    </Router>
  );
}


export default App;
