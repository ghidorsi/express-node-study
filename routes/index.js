var express = require('express');
var router = express.Router();
const Task = require("./../models/task");

/* GET home page. */
router.get('/', function(req, res, next) {
  Task.find(null).exec().then((tasks) => {
    console.log(tasks);
    res.render("index", { title: "Oi guriass", tasks: tasks });
  }).catch((err) => {
    throw err;
  });
});

router.post('/test', function(req, res, next) {
  var body = req.body;
  Task.create(body, (err, task) => {
    if(err) throw err;

    res.redirect('/');
  });
});

module.exports = router;
