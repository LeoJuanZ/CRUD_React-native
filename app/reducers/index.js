import { combineReducers } from 'redux';

import BlogReducers from './BlogReducer'

const rootReducer = combineReducers ({
    blogsList: BlogReducers
})

export default rootReducer;