var express = require('express');
var router = express.Router();
var controller = require('./controllers/index.controller')


router.get('/api/welcome', (req, res)=> {
    res.json('edit MODELS and  CONTROLLERS and please add new ROUTES in this file')
  })
router.post('/api/post',controller.saveItem)
router.put('/api/put/:id',controller.editItem)
router.delete('/api/del/:id',controller.deleteItem)
router.get('/api/get/:id', controller.viewItem  )
router.get('/api/get',controller.viewAllItem  )
module.exports = router;