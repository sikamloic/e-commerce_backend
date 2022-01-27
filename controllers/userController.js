const db = require('../models');
const User = db.user;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/auth.config')


exports.signUp = (req, res) =>{
 const user = new User({
        role: req.body.role,
        nom: req.body.nom,
        prenom: req.body.prenom,
        numero: req.body.numero,
        ville: req.body.ville,
        email: req.body.email,
        pwd: bcrypt.hashSync(req.body.pwd, 8),
    });
    user.save((err, user)=>{
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      user.save((err) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        res.send({ message: "Enregistrement reussie !!!" });
      });
    })
}

exports.signIn = (req, res) =>{
  User.findOne({email : req.body.email})
  .exec((err, data)=>{
    if(err){
      res.status(500).send({message : err});
      return;
    };

    if(!data){
      res.status(404).send({message : "Nom d'utilisateur ou mot de passe incorrect"});
      return;
    }

    const pwdIsValid = bcrypt.compareSync(req.body.pwd, data.pwd);

    if(!pwdIsValid){
      res.status(404).send({message : "Nom d'utilisateur ou mot de passe incorrect"});
      return;
    }

    var token = jwt.sign(
      { id: data.id },
      config.secret,
      {
        expiresIn: 86400, // 24 hours
      }
    );

    res.status(200).send({
      id: data._id,
      accessToken: token,
      role: data.role,
      nom: data.nom,
      prenom: data.prenom,
      email: data.email,
      numero: data.numero,
      ville: data.ville,
    });

  })
  // .catch((err) =>{
  //   console.log(err);
  //   res.status(500).send({
  //     message : "une erreur sur le server",
  //     error : err
  //   })
  // })
}

exports.getCoiffeuse = (req, res) =>{
  User.find({})
}