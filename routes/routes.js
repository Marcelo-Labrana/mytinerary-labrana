const router = require('express').Router();
const citiesControllers = require('../controllers/citiesControllers')
const cities12Controllers = require('../controllers/cities12Controllers')

router.route('/cities')
.get(citiesControllers.getCities)
.post(citiesControllers.loadCity)

router.route('/cities/:id')
.get(citiesControllers.cityByID)
.delete(citiesControllers.deleteCity)
.put(citiesControllers.updateCity)


router.route('/cities12')
.get(cities12Controllers.getCities12)


module.exports = router
