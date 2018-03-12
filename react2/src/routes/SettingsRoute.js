import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import History from './history/History'
import Team from './team/Team'


const SettingsRoute = ({match}) => (

    <Fragment>
        <Route path={`${match.url}/history`} component={History}/>
        <Route path={`${match.url}/team`} component={Team}/>
    </Fragment>);

export default SettingsRoute;
