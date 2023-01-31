const router=require('express').Router();
const Post=require('../models/Post');
const postController=require('../controllers/postController');

router.post('/create',postController.create);
router.get('/:id',postController.getById);
router.put('/update/:id',postController.updateById);
router.delete('/delete/:id',postController.deleteById);
router.get('/',postController.getAll);
module.exports=router;