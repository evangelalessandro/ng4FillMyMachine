var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/MachineDb', ['company']);
 
// Get All companies
router.get('/companies', function(req, res, next){
    db.company.find(function(err, company){
        if(err){
            res.send(err);
        }
        res.json(company);
    });
});

// Get Single company
router.get('/company/:id', function(req, res, next){
    db.company.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, company){
        if(err){
            res.send(err);
        }
        res.json(company);
    });
});

//Save company
router.post('/company', function(req, res, next){
    var company = req.body;
    if (!company.creationDate) {
        company.creationDate = new Date().toLocaleString();
    }    
    company.updateDate = new Date().toLocaleString();
    console.log(company);

    if(!company.name){
        res.status(400);
        res.json({
            "error": "No Name present! It's mandatory! "
        });
    } else {
        db.company.save(company, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(company);
        });
    }
});

// Delete company
router.delete('/company/:id', function(req, res, next){
    db.company.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, company){
        if(err){
            res.send(err);
        }
        res.json(company);
    });
});

// Update company
router.put('/company/:id', function(req, res, next){
    var company = req.body;
    var updcompany = {
      
    };
    console.log('Server update company faseA ' ,company);
     
    if (company.name){
        updcompany.name = company.name;
        console.log('update name ');
    } 
    if (company.email) {
        updcompany.email = company.email;
        console.log('update email ');
    }
    if (company.mobile2) {
        updcompany.mobile2 = company.mobile2;
    }
    if (company.mobile1) {
        updcompany.mobile1 = company.mobile1;
    }
    if (company.note) {
        updcompany.note = company.note;
    }
    updcompany.updateDate = new Date().toLocaleString();

    if(!updcompany){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        console.log('Server update company faseB ', updcompany);

        db.company.update({_id: mongojs.ObjectId(req.params.id)},updcompany, {}, function(err,company){
        if(err){
            res.send(err);
        }
        res.json(company);
    });
    }
});

module.exports = router;