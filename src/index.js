
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { MobxRouter, RouterStore, startRouter } from 'mobx-router';
import views from './config/views'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const store ={
    app: {
        title: 'George Stoumpos',
        user: null
    },
    router: new RouterStore()

};

startRouter(views, store);


ReactDOM.render(
    <Provider store={store}>
        <MobxRouter/>
    </Provider>
    , document.getElementById('root')
);
