const express =require('express');
const { addTransection, getAllTransection ,editTransection ,deleteTransection} = require('../controllers/transectionCtrl');

//router object
const router =express.Router();

//routers
//add transection POST Method
router.post('/add-transection',addTransection);

//edit transection POST Method
router.post('/edit-transection',editTransection);

//deletd transection POST Method
router.post('/delete-transection',deleteTransection);

//get transection 
router.post('/get-transection',getAllTransection);


module.exports = router;