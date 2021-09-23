const modelo = require("./models/index.model")
const itemCtrl = {};



itemCtrl.helpJson = (req, res) => {
  //Show name model the import is OK
  res.json('Create New Controler Take Default Object in Routes/api/controllers/index.controller.js ')
      };
      
itemCtrl.defaultController = (req, res) => {
        res.json('take this Model ')
      };

itemCtrl.create = async (req, res) => {

        //await modelo.save();
        res.redirect("/");
      };

      itemCtrl.update = async (req, res) => {


        //await modelo.save();
        res.redirect("/");
      };

      itemCtrl.delete = async (req, res) => {


        //await modelo.save();
        res.redirect("/");
      };

      itemCtrl.read = async (req, res) => {


        //await modelo.save();
        res.redirect("/");
      };
  
      itemCtrl.readAll = async (req, res) => {


        //await modelo.save();
        res.redirect("/");
      };
  
    module.exports = itemCtrl;