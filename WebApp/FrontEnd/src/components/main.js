import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';
 
//Components
import LandingPage from './payperview/LandingPageView';
import Login from './payperview/Login.js';
import SignUp from './payperview/SignUp.js';
import UserAccount from  './payperview/UserAccount';


class Main extends Component {
    render(){
        return(
            <Switch>
                <Route exact path="/payperview" component={LandingPage}/>   
                <Route exact path="/login" component={Login} />   
                <Route exact path="/signup" component={SignUp} />    
                <Route exact path="/useraccount" component={UserAccount} />   
                <Route exact path="/logout" component={Login} />   
            </Switch>
            
        )
    }
}
export default Main;
