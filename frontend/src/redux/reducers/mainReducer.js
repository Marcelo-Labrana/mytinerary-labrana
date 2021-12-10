import { combineReducers } from 'redux'
import citiesReducer from './citiesReducer'
import cityReducer from './cityReducer'
import usersReducer from './usersReducer'

const mainReducer = combineReducers({
    citiesReducer, cityReducer, usersReducer
})

export default mainReducer