const express= require('express')
const controller = require('../controller/routeController')
const router= express.Router();

router.post('/user',controller.postlsd)
router.put('/user',controller.putlsd)
router.delete('/user',controller.deletelsd)
module.exports = router;