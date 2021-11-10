const express= require('express')
const controller = require('../controller/routeController')
const router= express.Router();

router.get('/user',controller.lsd)
router.post('/user',controller.postlsd)

module.exports = router;