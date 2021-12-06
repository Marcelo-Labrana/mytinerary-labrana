import { combineReducers } from 'redux'
import citiesReducer from './citiesReducer'
import cityReducer from './cityReducer'

const mainReducer = combineReducers({
    citiesReducer, cityReducer
})

export default mainReducer