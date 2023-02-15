const router=require('express').Router();
const postController=require('../controllers/postController');
const verifyToken=require('../middleware/auth');
const upload=require('../helpers/multer');
const CommentController = require('../controllers/commentController');
const likeController = require('../controllers/likeController');

router.post('/create',verifyToken.verifyTokenAndRole,upload.upload.single('image'),postController.create);
router.get('/',postController.getAll);
router.get('/:id',postController.getById);
router.put('/update/:id',upload.upload.single('image'),verifyToken.verifyTokenAndRole,postController.updatePost);
router.delete('/delete/:id',verifyToken.verifyTokenAndRole,postController.deleteById);
router.post('/:id/like', verifyToken.verifyToken,likeController.like);
router.put("/:id/comment",verifyToken.verifyToken,CommentController.createComment);
module.exports=router;