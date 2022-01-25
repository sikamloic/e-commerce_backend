const db = require('../models');
const { findOne } = require('../models/utilisateur');
const User = db.user

checkEmailAndNumber = (req, res, next) => {
    User.findOne({numero : req.body.numero})
    .exec((err, data)=>{
        if(err){
            res.status(500).send({message : err});
            return;
        };
        if(data){
            res.status(400).send({message: 'Echec! Numero existant déjà'});
            return;
        }
    });

    User.findOne({email : req.body.email})
    .exec((err, data) =>{
        if(err){
            res.status(500).send({message : err});
            return;
        };
        if(data){
            res.status(400).send({message : 'Echec! Email existant déjà'});
            return;
        }
    });
    next();
}

const verifySignUp = {
    checkEmailAndNumber
}

module.exports = verifySignUp