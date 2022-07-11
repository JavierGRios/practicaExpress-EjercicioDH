// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/products/create', productsController.create); 
router.post('/products/create', productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/prodcucts/:id/', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/products/:id/edit', productsController.edit); 
router.post('/prodcuts/:id', productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.post('/products/:id', productsController.destroy); 


module.exports = router;
