import { combineReducers } from 'redux'
import citiesReducer from './citiesReducer'
import cityReducer from './cityReducer'
import usersReducer from './usersReducer'
import activitiesReducer from './activitiesReducer'

const mainReducer = combineReducers({
    citiesReducer, cityReducer, usersReducer,activitiesReducer
})

export default mainReducer