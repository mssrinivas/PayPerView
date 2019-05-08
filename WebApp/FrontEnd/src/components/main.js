import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';
 
//Components
import LandingPage from './payperview/LandingPageView';

class Main extends Component {
    render(){
        return(
            <Switch>
                <Route exact path="/payperview" component={LandingPage}/>         
            </Switch>
            
        )
    }
}
export default Main;
