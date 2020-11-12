var express = require('express');
var router = express.Router();
var fs = require('fs');
var pdf = require('html-pdf');
var path = require('path')
var html = fs.readFileSync('template/templatehtml.html', 'utf8');
var options = { format: 'Letter' };

/* GET home page. */
router.get('/export/:id', function(req, res, next) {
  try {
    let pathJoin = path.resolve('.').split("\\").join("/")
    let options = {
      "format": "A4",        // allowed units: A3, A4, A5, Legal, Letter, Tabloid
      "orientation": "landscape", // portrait or landscape
  // width:'297mm',
  // height:'210mm',
  // base: "file://"+path.join(__dirname,'/'),
  base: "file://" + pathJoin + "/template/",
    };
    console.log(options);
    pdf.create(html, options).toFile('templatehtml111.pdf', function(err, res) {
      if (err) return console.log(err);
      console.log(res); // { filename: '/app/businesscard.pdf' }
    })
    res.send('html-pdf')
  } catch (error) {
    console.log(error)
  }

});

module.exports = router;
