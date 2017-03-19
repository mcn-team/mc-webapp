import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


import App from './App';
import { TestComponent as Test } from './components/test/test.component';

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
            </Route>
        </Router>
    </Provider>,
  document.getElementById('root')
);
