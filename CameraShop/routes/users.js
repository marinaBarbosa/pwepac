var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*app.post('/create', function(req, res, next) {
  res.sendFile(__dirname + '/create.html')
});
*/

module.exports = router;
