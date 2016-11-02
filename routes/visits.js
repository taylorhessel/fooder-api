var express = require('express');
var router = express.Router();
var queries = require('../database/queries');

const oops = "Something went wrong on our end.  Please try again."

// GET all visits for user
router.get('/', function(req, res, next) {

  if (!req.query.id) {
    var err = new Error('Bad Request');
    err.status = 400;
    next(err);
    return;
  }

  queries.getVisits(req.query.id)
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      console.log(err);
      res.send(oops);
    })

});

// POST visit for user
router.post('/', function(req, res, next) {

  if (!(req.body.user_id && req.body.restaurant_id)) {
    var err = new Error('Bad Request');
    err.status = 400;
    next(err);
    return;
  }

  queries.postVisit(req.body)
    .then((results) => {
      res.send(`New visit added`);
    })
    .catch((err) => {
      console.log(err);
      res.send(oops);
    })

});

// DELETE visit for user
// router.delete('/', function(req, res, next) {
//
//  queries.deleteVisit(req.body)
//     .then((results) => {
//       res.send(`Visit deleted.`);
//     })
//     .catch((err) => {
//       res.send(oops);
//     })
//
// });

module.exports = router;
