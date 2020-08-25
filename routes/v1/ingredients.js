const express = require('express');
const router = express.Router();

const ingredientsController = require('../../controllers/v1/ingredients');

router.get('/', ingredientsController.getIngredients);

module.exports = router;
