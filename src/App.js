import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';

import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

// Including styles
import './styles/app.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <ReactNotification />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
