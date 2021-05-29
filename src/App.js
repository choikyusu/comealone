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

function App() {
  return (
    // <div className="App">
    //   <NaverLogin></NaverLogin>
    // </div>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Auth}/>
          <Route exact path="/login" component={NaverLogin}/>
          <Route exact path="/counter" component={CounterContainer}/> 
          <Route exact path="/preference" component={PreferenceContainer}/> 
        </Switch>
      </div>
    </Router>
  );
}


export default App;
