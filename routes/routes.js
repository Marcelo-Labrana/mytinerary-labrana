const router = require('express').Router();
const citiesControllers = require('../controllers/citiesControllers')
const cities12Controllers = require('../controllers/cities12Controllers')
const itinerariesControllers = require('../controllers/itinerariesControllers')
const usersControllers = require('../controllers/usersControllers')
const activitiesControllers = require('../controllers/activitiesControllers')
const validator = require('../config/validator.js')
const passport = require('../config/passport.js')

router.route('/cities')
.get(citiesControllers.getCities)
.post(citiesControllers.loadCity)

router.route('/cities/:id')
.get(citiesControllers.cityByID)
.delete(citiesControllers.deleteCity)
.put(citiesControllers.updateCity)

router.route('/itineraries')
.get(itinerariesControllers.getItineraries)
.post(itinerariesControllers.addItinerary)

router.route('/itineraries/:id')
.get(itinerariesControllers.getByID)
.delete(itinerariesControllers.deleteItinerary)
.put(itinerariesControllers.updateItinerary)

router.route('/itinerary/:cityId')
.get(itinerariesControllers.consultItineraries)

router.route('/users')
.post(validator,usersControllers.addUser)

router.route('/users/sign_in')
.post(usersControllers.signUser)

router.route('/users/sign_in/token')
.post(passport.authenticate('jwt',{session: false}), usersControllers.signToken )

router.route('/users/:id')
.delete(usersControllers.deleteUser)
.put(usersControllers.updateUser)

router.route('/activities')
.get(activitiesControllers.getActivities)
.post(activitiesControllers.addActivity)

router.route('/activities/:id')
.get(activitiesControllers.consultActivities)
.delete(activitiesControllers.deleteActivity)
.put(activitiesControllers.updateActivity)


router.route('/itinerary/comments/:itineraryId')
.put(itinerariesControllers.comments)

router.route('/cities12')
.get(cities12Controllers.getCities12)

module.exports = router
