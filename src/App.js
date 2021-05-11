import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import './App.css';
import Auth from './hoc/Auth';

function App() {
  return (
    // <div className="App">
    //   <NaverLogin></NaverLogin>
    // </div>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" render={() => <Auth dashboard={Dashboard} name = {'a1111'} />}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
