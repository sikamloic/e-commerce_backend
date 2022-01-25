const db = require('../models');
const Galerie = db.galerie

exports.addPicture = (req, res) =>{
    const galerie = Galerie({
        coiffeuse: req.userId,
        nom: req.body.nom
    })
    galerie
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

exports.getPicture = (req, res) =>{
    Galerie.find({coiffeuse: req.userId})
    .populate("coiffeuse")
    .exec()
    .then((result) => {
      res.status(200).json(result);
    });
};

exports.deletePicture = (req, res) => {
    const id = req.params.id;
    Galerie.findById(id)
      .exec()
      .then((result) => {
        if (result.coiffeuse == req.userId) {
          Galerie.deleteOne({ _id: id })
            .exec()
            .then((ress) => {
              res.status(200).json(ress);
            });
        }
      });
  };