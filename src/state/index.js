import { createStore, combineReducers } from 'redux'
import { user } from './ducks'

const reducers = combineReducers({
  loggedUserState: user
})

const store = createStore(reducers)

export default store