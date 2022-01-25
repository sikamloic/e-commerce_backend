const router = require('express').Router()
const controller = require('../controllers/userController');
const db = require('../models');
const User = db.user
const {verifySignUp} = require('../middlewares')

// router.post('/signIn', async (req , res) =>{
//     const user = new User ({
//         nom: req.body.nom,
//         prenom: req.body.prenom,
//         numero: req.body.numero,
//         ville: req.body.ville,
//         email: req.body.email,
//         pwd: req.body.pwd,
//     })

//     try{
//         const saveUser = await user.save();
//         res.send(saveUser);
//     }
//     catch(err){
//         res.status(500).send(err);
//     }
// });
router.post('/signUp',[verifySignUp.checkEmailAndNumber], controller.signUp);
router.post('/signIn', controller.signIn);

module.exports = router