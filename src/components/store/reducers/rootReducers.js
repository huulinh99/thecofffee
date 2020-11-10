import blogReducers from './blogReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    blog: blogReducers
});

export default rootReducer