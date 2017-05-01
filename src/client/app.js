import React from 'react';
import ReactDom from 'react-dom';
//import { Router, IndexRoute } from 'react-router';
import{ BrowserRouter as Router, Route, Link } from 'react-router-dom';

import '../setup';
//import routes from './routes/rootRoute';
import history from './routes/history';

import Home from './pages/NewTask';
import MyTasks from './pages/MyTasks';

if (typeof window !== 'undefined') {
  ReactDom.render((
    <div>
        <Router history={ history }>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/my-task">My Task</Link></li>
                </ul>
                <Route exact path="/" component={Home}/>
                <Route path="/my-task" component={MyTasks}/>
            </div>
        </Router>
    </div>
    

  ), document.getElementById('app'));
}
