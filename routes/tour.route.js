const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tour.controller')
// data posting in database 

router.route('/').post( tourController.addTour)
.get(tourController.tours)

router.route('/:id').patch(tourController.getUpdateTour)
 

module.exports = router;