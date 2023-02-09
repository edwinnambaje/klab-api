const router=require('express').Router();
const postController=require('../controllers/postController');
const verifyToken=require('../middleware/auth');
const upload=require('../helpers/multer');
const LikeController = require('../controllers/likeController');
const CommentController = require('../controllers/commentController');

router.post('/create',upload.upload.single('image'),verifyToken.verifyTokenAndRole,postController.create);
router.get('/',postController.getAll);
router.get('/:id',postController.getById);
router.put('/update/:id',upload.upload.single('image'),verifyToken.verifyTokenAndRole,postController.updatePost);
router.delete('/delete/:id',verifyToken.verifyTokenAndRole,postController.deleteById);
router.post('/:id/like', verifyToken.verifyToken,LikeController.like);
router.put('/:id/unlike',verifyToken.verifyToken, LikeController.unlike);
router.put("/:id/comment",verifyToken.verifyToken,CommentController.createComment);
module.exports=router;