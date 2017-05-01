var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/MachineDb', ['carico']);

// Get All carichi
router.get('/carichi', function (req, res, next) {
    db.carico.find(function (err, carico) {
        if (err) {
            res.send(err);
        }
        res.json(carico);
    });
});

// Get Single carico
router.get('/carico/:id', function (req, res, next) {
    db.carico.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, carico) {
        if (err) {
            res.send(err);
        }
        res.json(carico);
    });
});

//insert carico
router.post('/carico', function (req, res, next) {
    var carico = req.body;
    if (!carico.creationDate) {
        carico.creationDate = new Date().toLocaleString();
    }
    carico.updateDate = new Date().toLocaleString();
    console.log("post carico " + JSON.stringify(carico));

    if (!carico.name) {
        res.status(400);
        res.json({
            "error": "No Name present! It's mandatory! "
        });
    } else {
        db.carico.save(carico, function (err, task) {
            if (err) {
                res.send(err);
            }
            console.log("risposta " + JSON.stringify(carico));

            res.json(carico);
        });
    }
});

// Delete carico
router.delete('/carico/:id', function (req, res, next) {
    db.carico.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, carico) {
        if (err) {
            res.send(err);
        }
        res.json(carico);
    });
});

// Update carico
router.put('/carico/:id', function (req, res, next) {
    var carico = req.body;
    var updcarico = {

    };
    console.log('Server update carico fase A ', carico);

    if (carico.creationDate) {
        updcarico.creationDate = carico.creationDate;
    }
    if (carico.name) {
        updcarico.name = carico.name;
        console.log('update name ');
    }
    if (carico.email) {
        updcarico.email = carico.email;
        console.log('update email ');
    }
    if (carico.mobile1) {
        updcarico.mobile1 = carico.mobile1;
    }
    if (carico.note) {
        updcarico.note = carico.note;
    }
    if (carico.mc3) {
        updcarico.mc3 = carico.mc3;
    }
    if (carico.meter) {
        updcarico.meter = carico.meter;
    }
    if (carico.kg) {
        updcarico.kg = carico.kg;
    }
    if (carico.trucktype) {
        updcarico.trucktype = carico.trucktype;
    }
    if (carico.nationSource) {
        updcarico.nationSource = carico.nationSource;
    }
    if (carico.citySource) {
        updcarico.citySource = carico.citySource;
    }
    if (carico.locSource) {
        updcarico.locSource = carico.locSource;
    }
    if (carico.nationDest) {
        updcarico.nationDest = carico.nationDest;
    }
    if (carico.cityDest) {
        updcarico.cityDest = carico.cityDest;
    }
    if (carico.locDest) {
        updcarico.locDest = carico.locDest;
    }

    if (carico.idCompany) {
        updcarico.idCompany = carico.idCompany;
    }

    updcarico.updateDate = new Date().toLocaleString();

    if (!updcarico) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        console.log('Server update carico faseB ', updcarico);

        db.carico.update({ _id: mongojs.ObjectId(req.params.id) },
            updcarico, {},
            function (err, carico) {
            if (err) {
                res.send(err);
            }
            console.log('Server update carico faseC ', updcarico);
            updcarico._id = req.params.id;

            res.json(updcarico);
        });
    }
});

module.exports = router;