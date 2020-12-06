import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {BrowserRouter as Router, Route} from "react-router-dom";
import HOME from '../containers/Home'
import CHAT from '../containers/Chat'

class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path='/' component={HOME} />
                <Route exact path='/chat' component={CHAT} />
            </Router>
        )
    }
}
export default AppRouter;