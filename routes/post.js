const router=require('express').Router();
const postController=require('../controllers/postController');
const verifyToken=require('../middleware/auth');
const upload=require('../helpers/multer');
const CommentController = require('../controllers/commentController');
const likeController = require('../controllers/likeController');
const {blogSchema}=require('../validations/blogSchema')
const {validate}=require('../middleware/validate');


router.post('/create',upload.upload.single('image'),validate(blogSchema),verifyToken.verifyTokenAndRole,postController.create);
router.get('/',postController.getAll);
router.get('/:id',postController.getById);
router.patch('/update/:id',upload.upload.single('image'),verifyToken.verifyTokenAndRole,postController.updatePost);
router.delete('/delete/:id',verifyToken.verifyTokenAndRole,postController.deleteById);
router.post('/:id/like', verifyToken.verifyToken,likeController.like);
router.patch("/:id/comment",verifyToken.verifyToken,CommentController.createComment);
module.exports=router;