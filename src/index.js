import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


import App from './App';
import './index.css';
import { TestComponent as Test } from './components/test/test.component';
import { LoginPageComponent } from './pages/login/login-page.component';

const store = createStore(
    combineReducers({
        routing: routerReducer
    })
);

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history }>
            <Route path="/" component={ App }>
                <Route path="/test" component={ Test }/>
                <Route path="/login" component={ LoginPageComponent } />
            </Route>
        </Router>
    </Provider>,
  document.getElementById('root')
);
