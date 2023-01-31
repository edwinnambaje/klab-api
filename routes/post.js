const router=require('express').Router();
const postController=require('../controllers/postController');
const verifyToken=require('../middleware/auth');

router.post('/create',verifyToken.verifyToken,postController.create);
router.get('/:id',verifyToken.verifyToken,postController.getById);
router.put('/update/:id',verifyToken.verifyToken,postController.updateById);
router.delete('/delete/:id',verifyToken.verifyToken,postController.deleteById);
router.get('/',verifyToken.verifyToken,postController.getAll);
module.exports=router;