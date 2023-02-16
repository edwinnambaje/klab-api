const router=require('express').Router();
const verifyToken=require('../middleware/auth');
const userController=require('../controllers/userController');

router.get('/all',verifyToken.verifyTokenAndRole,userController.getAll);
router.get('/:id',verifyToken.verifyTokenAndRole,userController.getById);
router.delete('/delete/:id',verifyToken.verifyTokenAndRole,userController.deleteById);
router.patch('/update/:id',userController.updateById);
//router.put('/user/:id',verifyToken.verifyToken,userController.updateUserById);
module.exports=router;