const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const stuffControllers = require('../controllers/sauce');

router.get('/', auth, stuffControllers.getAllSauces);

router.get('/:id', auth, stuffControllers.getOneSauce);

router.post('/', auth, multer, stuffControllers.createSauce);

router.put('/', auth, multer, stuffControllers.modifySauce);

router.delete('/', auth, stuffControllers.deleteSauce);

module.exports = router;
