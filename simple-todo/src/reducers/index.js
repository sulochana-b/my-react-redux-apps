import {combineReducers} from 'redux';
import inputReducer from './input-reducer';
import activeUserReducer from './active-user-reducer';

const allReducers = combineReducers({
    input : inputReducer,
    activeUser:activeUserReducer
});
export default allReducers;