import reducers from '../reducers';
import {rootEpic} from '../epics'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { createEpicMiddleware } from 'redux-observable';
const EpicMiddleware=createEpicMiddleware(rootEpic);
export const store = createStore(reducers,
    composeWithDevTools(
    applyMiddleware(...[thunk,EpicMiddleware]),
    // other store enhancers if any
));