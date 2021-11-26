const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const stuffControllers = require('../controllers/stuff');

router.get('/', auth, stuffControllers.getAllSauces);

router.get('/:id', auth, stuffControllers.getOneSauce);

router.post('/', auth, stuffControllers.creatSauce);

router.put('/', auth, stuffControllers.modifySauce);

router.delete('/', auth, stuffControllers.deleteSauce);

router.post('/:id/like', auth, stuffControllers.likeSauce);