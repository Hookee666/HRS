import { combineReducers } from 'redux';
import projectReducer from './projectReducer'
import UIReducer from './UIReducer'
const rootReducer = combineReducers({
    UI:UIReducer,
    projectReducer:projectReducer
});

export default rootReducer;