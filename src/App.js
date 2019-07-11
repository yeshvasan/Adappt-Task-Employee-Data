import React from 'react';
import "./App.css";

import Home from './Pages/Home';
import Addemployee from './Pages/Addemployee';
import Prakash from './Pages/Prakash';
import Error from './Pages/Error';
import { Route, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar';

function App() {
  return (
    <React.Fragment>
    <Navbar />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/addemployee/" component={Addemployee} />
    <Route exact path="/addemployee/:slug" component={Prakash} />
    <Route component = {Error} />
    </Switch>
    </React.Fragment>
  )
}

export default App;
