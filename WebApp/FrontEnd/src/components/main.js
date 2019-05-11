import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';
 
//Components
import LandingPage from './payperview/LandingPageView';
import Login from './payperview/Login.js';
import SignUp from './payperview/SignUp.js';
import UserAccount from  './payperview/UserAccount';

import Jobs from './payperview/Jobs'
import Salary from './payperview/Salary'
import Interview from './payperview/Interview'
import Companies from './payperview/Companies';


class Main extends Component {
    render(){
        return(
            <Switch>
                <Route exact path="/payperview" component={Jobs}/>   
                <Route exact path="/login" component={Login} />   
                <Route exact path="/signup" component={SignUp} />    
                <Route exact path="/useraccount" component={UserAccount} />   
                <Route exact path="/logout" component={Login} /> 
                <Route exact path="/payperview/jobs" component={Jobs} />     
                <Route exact path="/payperview/companies" component={Companies} />   
                <Route exact path="/payperview/salary" component={Salary} />   
                <Route exact path="/payperview/interviews" component={Interview} />   
            </Switch>
            
        )
    }
}
export default Main;
