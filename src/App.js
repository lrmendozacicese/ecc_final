import React from 'react';
import{BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation'
import Login from './components/Login'
import Searchpat from './components/Searchpat'
import Graph from './components/Graph'
import Logout from './components/Logout'
import Registerdata from './components/Registerdata'
import Register from './components/Register';

function App() {
  return (
    <div>
<Router>
<Navigation/>
<Route  path="/" exact component={Login}/>
<Route path="/Search" component={Searchpat}/>
<Route path="/Graph" component={Graph}/>
<Route path="/Logout" component={Logout}/>
<Route path="/Register" component={Register}/>
<Route path="/Record" component={Registerdata}/>
</Router>
    </div>
  );
}

export default App;
