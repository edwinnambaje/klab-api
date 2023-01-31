const router=require('express').Router();
const verifyToken=require('../middleware/auth');
const userController=require('../controllers/userController');

router.get('/all',userController.getAll);
router.get('/:id',userController.getById);
router.delete('/:id',verifyToken.verifyToken,userController.deleteById);
router.put('/:id',verifyToken.verifyToken,userController.updateById);
module.exports=router;