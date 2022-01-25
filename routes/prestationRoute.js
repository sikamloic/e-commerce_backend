const router = require('express').Router()
const controller = require('../controllers/prestationController');
const db = require('../models');
const {authJwt} = require('../middlewares')

router.post('/prestation', [authJwt.verifyToken], controller.addPrestation);
router.get('/prestation', [authJwt.verifyToken], controller.getPrestation);
router.delete('/prestation/:id', [authJwt.verifyToken], controller.deletePrestation);


module.exports = router