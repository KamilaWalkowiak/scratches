import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './routes/home/Home.component';
import Contact from './routes/contact/Contact.component';
import About from './routes/about/About.component';
import ApiView from './routes/ApiView/ApiView';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import SettingsRoute from './routes/SettingsRoute';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/api' component={ApiView}/>
            <Route path='/settings' component={SettingsRoute}/>
        </div>


    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
