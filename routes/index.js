var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/bundle.js', function (req, res, next) {
  let nname = null
  if (req.oidc.isAuthenticated()) {
    let user = req.oidc.user
    nname = user.nickname ? user.nickname : null
  }
  res.render('bundle', { name: nname ? nname : "", title: 'Express' });
});
router.get('/bundle.css', function (req, res, next) {
  res.render('css')
})
router.get('/callback', (req, res, next) => {
  res.redirect("/")
})
module.exports = router;
