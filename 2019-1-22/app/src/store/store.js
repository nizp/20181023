import {createStore,combineReducers} from 'redux';
import r1 from './reducer1';
import r2 from './reducer2';
const reducer = combineReducers({r1,r2});
const store = createStore(reducer);
export {store};