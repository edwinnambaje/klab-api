const router=require('express').Router();
const messageController=require('../controllers/messageController');

router.post('/create',messageController.create);
router.get('/:id',messageController.getSingle);
router.delete('/delete/:id',messageController.delete);
router.patch('/update/:id',messageController.update);
router.get('/',messageController.getMessages);
module.exports=router;