import React from 'react';

import { Switch, Route } from 'react-router-dom';

import PremiumComponent from './premium';
import HelpComponent from './help';
import DownloadComponent from './download';
import SubscribeComponent from './subscribe';
import LoginComponent from './login';
import HomeComponent from './home';





const Routes = () => {
    return(
        <>
            <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route exact path="/premium" component={PremiumComponent} />
                <Route exact path="/help" component={HelpComponent} />
                <Route exact path="/download" component={DownloadComponent} />
                <Route exact path="/subscribe" component={SubscribeComponent} />
                <Route exact path="/login" component={LoginComponent} />
            </Switch>
        </>
    );
}


export default Routes;