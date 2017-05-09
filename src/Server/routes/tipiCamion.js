var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/MachineDb', ['tipiCamion']);

// Get All carichi
router.get('/tipicamion', function (req, res, next) {
  db.tipocamion.find(function (err, tipocamion) {
    if (err) {
      res.send(err);
    }
    res.json(tipocamion);
  });
});

// Get Single tipocamion
router.get('/tipocamion/:id', function (req, res, next) {
  db.tipocamion.findOne({
    _id: mongojs.ObjectId(req.params.id)
  }, function (err, tipocamion) {
    if (err) {
      res.send(err);
    }
    res.json(tipocamion);
  });
});

//insert tipocamion
router.post('/tipocamion', function (req, res, next) {
  var tipocamion = req.body;
  if (!tipocamion.creationDate) {
    tipocamion.creationDate = new Date().toLocaleString();
  }
  tipocamion.updateDate = new Date().toLocaleString();
  console.log("post tipocamion " + JSON.stringify(tipocamion));

  if (!tipocamion.name) {
    res.status(400);
    res.json({
      "error": "No name present! It's mandatory! "
    });
  } else {
    db.tipocamion.save(tipocamion, function (err, task) {
      if (err) {
        res.send(err);
      }
      console.log("risposta " + JSON.stringify(tipocamion));

      res.json(tipocamion);
    });
  }
});

// Delete tipocamion
router.delete('/tipocamion/:id', function (req, res, next) {
  db.tipocamion.remove({
    _id: mongojs.ObjectId(req.params.id)
  }, function (err, tipocamion) {
    if (err) {
      res.send(err);
    }
    res.json(tipocamion);
  });
});

// Update tipocamion
router.put('/tipocamion/:id', function (req, res, next) {
  var tipocamion = req.body;
  var updtipocamion = {

  };
  console.log('Server update tipocamion fase A ', tipocamion);

  if (tipocamion.creationDate) {
    updtipocamion.creationDate = tipocamion.creationDate;
  }
  if (tipocamion.name) {
    updtipocamion.name = tipocamion.name;
    console.log('update name ');
  }
  updtipocamion.refreigerator = tipocamion.refreigerator;
  console.log('update refreigerator ');
 
  updtipocamion.food = tipocamion.food;
  console.log('update food ');



  tipocamion.updateDate = new Date().toLocaleString();
  updtipocamion.updateDate = new Date().toLocaleString();

  if (!updtipocamion) {
    res.status(400);
    res.json({
      "error": "Bad Data"
    });
  } else {
    console.log('Server update tipocamion faseB ', updtipocamion);

    db.tipocamion.update({
        _id: mongojs.ObjectId(req.params.id)
      },
      updtipocamion, {},
      function (err, tipocamion) {
        if (err) {
          res.send(err);
        }
        console.log('Server update tipocamion faseC ', updtipocamion);
        updtipocamion._id = req.params.id;

        res.json(updtipocamion);
      });
  }
});

module.exports = router;
