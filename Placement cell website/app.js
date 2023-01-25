const express = require("express");  /*routing is easy*/
const bodyParser = require("body-parser");    /*retrieve the data*/
const mysql = require("mysql");
const ejs = require("ejs");      
const app = express();

app.use(express.static ("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded ({extended: true}));

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'training'
});

db.connect(function(err){
  if(err) throw err;
  console.log("Connected to mysql server");
});

app.get("/", function(req, res){
  res.render("home");
});

app.get("/about", function(req, res){
  res.render("about");
});
app.get("/gallery", function(req, res){
  res.render("gallery");
});
app.get("/contact", function(req, res){
  res.render("contact");
});
app.get("/Testimonials", function(req, res){
  res.render("Testimonials");
});


app.get("/contact", function(req, res){
  res.render("contact");
});

app.post("/", function(req, res){

  const values = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
  };
  
    db.query("INSERT INTO USER set ?",[values], function (error, result, fields) {
    console.log("Connected...");
    if (error)
      res.redirect("contact");
    else  res.render("home");
});
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
