const modelo = require("./models/marketList.model")

const itemCtrl = {};




itemCtrl.saveItem = async (req, res) => {
  const postData = {
    itemName: req.body.itemName,
    madeBy: req.body.madeBy,
    price: req.body.price,
    category: req.body.category,
    status: req.body.status,
    needName: req.body.needName,
  
};
  const data = await modelo.save(postData)
       
        console.log(data)
        res.json(data);
      };

      itemCtrl.editItem = async (req, res) => {
        const postData = {
          itemName: req.body.itemName,
          madeBy: req.body.madeBy,
          price: req.body.price,
          category: req.body.category,
          status: req.body.status,
          needName: req.body.needName,
        
      };

        res.json(postData);
      };

      itemCtrl.deleteItem = async (req, res) => {
        const urlData = req.params.id
        await modelo.findByIdAndDelete(urlData)
       
        res.json("delete Data ID "+urlData);
       
      };

      itemCtrl.viewItem = async (req, res) => {
        const urlData = req.params.id
        const data = await modelo.findById(urlData)

        console.log(urlData)
        res.json(data);
       
      };
  
      itemCtrl.viewAllItem = async (req, res) => {

        const data = await modelo.find()

        console.log(data)
        res.json(data);
      };
  
    module.exports = itemCtrl;