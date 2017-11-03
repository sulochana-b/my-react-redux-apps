import {combineReducers} from 'redux';
import activeDataReducer from './active-data-reducer';

const allReducer = combineReducers({
    newData:activeDataReducer
});

export default allReducer;