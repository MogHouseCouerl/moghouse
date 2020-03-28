import { adminReducer } from './adminReducer'
import { combineReducers } from 'redux'

export const mainReducer = combineReducers({ admin: adminReducer })
