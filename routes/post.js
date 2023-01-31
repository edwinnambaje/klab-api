const router=require('express').Router();
const postController=require('../controllers/postController');
const verifyToken=require('../middleware/auth');
const upload=require('../helpers/multer')

router.post('/create',upload.upload.single('image'),verifyToken.verifyTokenAndRole,postController.create);
router.get('/',verifyToken.verifyToken,postController.getAll);
router.get('/:id',verifyToken.verifyToken,postController.getById);
router.put('/update/:id',upload.upload.single('image'),verifyToken.verifyTokenAndRole,postController.updatePost);
router.delete('/delete/:id',verifyToken.verifyTokenAndRole,postController.deleteById);
module.exports=router;