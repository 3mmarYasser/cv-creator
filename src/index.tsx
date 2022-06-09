import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import './index.scss';
import {Provider} from "react-redux";
import store from "./store";
import {CookiesProvider} from 'react-cookie';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <CookiesProvider>
        <Provider store={store}>
            <App/>
        </Provider>
    </CookiesProvider>
);
