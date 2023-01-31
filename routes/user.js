const router=require('express').Router();
const verifyToken=require('../middleware/auth');
const userController=require('../controllers/userController');

router.get('/all',verifyToken.verifyTokenAndRole,userController.getAll);
router.get('/:id',verifyToken.verifyTokenAndRole,userController.getById);
router.delete('/:id',verifyToken.verifyTokenAndRole,userController.deleteById);
router.put('/:id',verifyToken.verifyTokenAndRole,userController.updateById);
module.exports=router;