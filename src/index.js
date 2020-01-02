import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import * as serviceWorker from './serviceWorker';
import todoApp from './Reducers'
import { Provider } from "react-redux";


const store = createStore(todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )


ReactDOM.render(
    <Provider store={store}> 
 <App/>
 </Provider> ,
 document.getElementById('root')

)

//render()
// store.subscribe(render)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
