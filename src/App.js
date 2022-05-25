import React, { Component } from 'react';
import Layout from './components/Layout/layout';
import {Route, Switch} from 'react-router-dom';
import SignIn from './components/Session/SignIn/signIn';
import SignUp from './components/Session/SignUp/signUp';

class App extends Component {
  render () {
    return (
      <div>
          <Switch>
            <Route exact path ='/' component={Layout}/> 
            <Route path ='/SignIn' component={SignIn}/>
            <Route path ='/signUp' component={SignUp}/>
          </Switch>
      </div>
    );
  }
}

export default App;
