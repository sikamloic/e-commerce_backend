const db = require('../models');
const Prestation = db.prestation

exports.addPrestation = (req, res) =>{
    const prestation = Prestation({
        coiffeuse: req.userId,
        nom: req.body.nom,
        prix: req.body.prix
    })
    prestation
    .save()
    .then((resultat) => {
      res.status(201).json(resultat);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Oups!! une erreur est survenue",
        error: err,
      });
    });
};

exports.getPrestation = (req, res) =>{
  Prestation.find({coiffeuse: req.userId})
  .populate("coiffeuse")
  .exec()
  .then((result) => {
    res.status(200).json(result);
  });
};

exports.deletePrestation = (req, res) => {
  const id = req.params.id;
  Prestation.findById(id)
    .exec()
    .then((result) => {
      if (result.coiffeuse == req.userId) {
        Prestation.deleteOne({ _id: id })
          .exec()
          .then((ress) => {
            res.status(200).json(ress);
          });
      }
    });
};