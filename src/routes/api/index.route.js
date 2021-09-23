var express = require('express');
var router = express.Router();
var controller = require('./controllers/index.controller')


//You Cant delete this 
router.get('/help', controller.helpJson  )
router.get('/api/default',controller.defaultController  )

router.get('/api/welcome', (req, res)=> {
    res.json('edit Models and  controllers and please add new Routes')
  })
router.post('/api/post',controller.create)
router.put('/api/put',controller.update)
router.delete('/api/del',controller.delete)
router.get('/api/get/:id', controller.read  )
router.get('/api/get/',controller.readAll  )



module.exports = router;