import React from 'react';
import ReactDOM from 'react-dom';
// import App from './app';
import App from './百度音乐/app';

// import {store} from './store/store';
import {store} from './百度音乐/store/store';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
if(module.hot)module.hot.accept();

ReactDOM.render(
    <Provider  store={store}>
        <Router>
            <App/>          
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);
// render();
// store.subscribe(()=>{
//     render();
// });

// function render(){
//     ReactDOM.render(
//         <App store={store}/>
//         ,
//         document.getElementById('root')
//     );
// }



