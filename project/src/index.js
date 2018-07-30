import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './store/reducer'
import state from './store/state'


let store = createStore(reducer,state)

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <Route component={App}/>
        </BrowserRouter>
    </Provider>
,
 document.getElementById('root'));
