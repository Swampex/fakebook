import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import {RootApp} from "./App";

ReactDOM.render(<RootApp /> , document.getElementById('root'));

serviceWorker.unregister();
