const router = require('express').Router()
const controller = require('../controllers/planningController');
const db = require('../models');
const {authJwt} = require('../middlewares')

router.post('/planning', [authJwt.verifyToken], controller.addPlanning);
router.get('/planning', [authJwt.verifyToken], controller.getPlanning);
router.delete('/planning/:id', [authJwt.verifyToken], controller.deletePlanning);


module.exports = router