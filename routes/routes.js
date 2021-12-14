const router = require('express').Router();
const citiesControllers = require('../controllers/citiesControllers')
const cities12Controllers = require('../controllers/cities12Controllers')
const itinerariesControllers = require('../controllers/itinerariesControllers')
const usersControllers = require('../controllers/usersControllers')
const validator = require('../config/validator.js')

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
.get(usersControllers.getUsers)
.post(validator,usersControllers.addUser)

router.route('/users/sign_in')
.get(usersControllers.getUsers)
.post(usersControllers.signUser)

router.route('/users/:id')
.get(usersControllers.getUserByID)
.delete(usersControllers.deleteUser)
.put(usersControllers.updateUser)


router.route('/cities12')
.get(cities12Controllers.getCities12)

module.exports = router
