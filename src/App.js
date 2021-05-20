import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import './App.css';
import Auth from './hoc/Auth';
import NaverLogin from './NaverLogin';
import CounterContainer from './CounterContainer'

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
        </Switch>
      </div>
    </Router>
  );
}


export default App;
