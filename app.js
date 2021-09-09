const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res){
   res.render("home");
})
app.get("/contact", function(req, res){
   res.render("contact");
})
app.get("/rooms", function(req, res){
   res.render("rooms");
})
app.get("/facilities", function(req, res){
   res.render("facilities");
})



app.listen(3000, function(){
	console.log("server is up and running");
});