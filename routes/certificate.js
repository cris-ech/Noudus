var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var certificate_controller = require('../controllers/certificate');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', certificate_controller.test);


router.post('/create', certificate_controller.certificate_create);

router.get('/:id', certificate_controller.certificate_details);

router.put('/:id/update', certificate_controller.certificate_update);

router.delete('/:id/delete', certificate_controller.certificate_delete);


module.exports = router;