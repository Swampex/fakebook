import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

const RootApp = () => { return (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)};

ReactDOM.render(<RootApp /> , document.getElementById('root'));

serviceWorker.unregister();
