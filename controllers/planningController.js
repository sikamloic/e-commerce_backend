const db = require('../models');
const Planning = db.planning

exports.addPlanning = (req, res) =>{
    const planning = Planning({
        coiffeuse: req.userId,
        nom: req.body.nom,
        prix: req.body.prix
    })
    planning
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

exports.getPlanning = (req, res) =>{
    Planning.find({coiffeuse: req.userId})
  .populate("coiffeuse")
  .exec()
  .then((result) => {
    res.status(200).json(result);
  });
};

exports.deletePlanning = (req, res) => {
  const id = req.params.id;
  Planning.findById(id)
    .exec()
    .then((result) => {
      if (result.coiffeuse == req.userId) {
        Planning.deleteOne({ _id: id })
          .exec()
          .then((ress) => {
            res.status(200).json(ress);
          });
      }
    });
};