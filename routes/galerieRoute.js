const router = require('express').Router()
const controller = require('../controllers/galerieController');
const db = require('../models');
const {authJwt} = require('../middlewares')

router.post('/galerie', [authJwt.verifyToken], controller.addPicture);
router.get('/galerie', [authJwt.verifyToken], controller.getPicture);
router.delete('/galerie/:id', [authJwt.verifyToken],  controller.deletePicture);


module.exports = router