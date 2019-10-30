import {combineReducers} from 'redux';

//引入对应的reducer
import userReducer from './user';

let rootReducer = combineReducers({
    userReducer
})


export default rootReducer;