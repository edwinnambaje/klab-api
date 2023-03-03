const router=require('express').Router();
const verifyToken=require('../middleware/auth');
const userController=require('../controllers/userController');

router.get('/all',verifyToken.verifyToken,userController.getAll);
router.get('/:id',verifyToken.verifyToken,userController.getById);
router.delete('/delete/:id',verifyToken.verifyTokenAndRole,userController.deleteById);
router.put('/update/:id',userController.updateById);
//router.put('/user/:id',verifyToken.verifyToken,userController.updateUserById);
module.exports=router;