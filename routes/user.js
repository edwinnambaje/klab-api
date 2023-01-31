const router=require('express').Router();
const User=require('../models/User');
const verifyToken=require('../middleware/auth');
const userController=require('../controllers/userController');

router.get('/all',verifyToken.verifyToken,userController.getAll);
router.get('/:id',verifyToken.verifyToken,userController.getById);
router.delete('/:id',verifyToken.verifyToken,userController.deleteById);
router.put('/:id',verifyToken.verifyToken,userController.updateById);
module.exports=router;