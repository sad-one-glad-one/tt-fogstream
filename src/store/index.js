import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { pageReducer } from './PageReducer'
import { newsReducer } from './NewsReducer'

const rootReducer = combineReducers({
    page: pageReducer,
    news: newsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
