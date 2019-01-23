import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import gocart from './gocart';

const store = createStore(combineReducers({
    reducer,
    gocart
}),applyMiddleware(thunk));
export {store};