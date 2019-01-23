import {combineReducers} from 'redux';
import reducer1 from './reducer1';
import reducer2 from './reducer2';

export default combineReducers({r1:reducer1,r2:reducer2});