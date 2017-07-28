import { combineReducers } from 'redux'
import user from './user'
import table from './table'

export const rootReducer = combineReducers({
  user,
  table,
})