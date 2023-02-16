const router=require('express').Router();
const estateController=require('../controllers/estateController');
const likeController=require('../controllers/likeController');
const upload=require('../helpers/multer');
const verifyToken=require('../middleware/auth');

router.post('/create',verifyToken.verifyTokenAndRole,upload.upload.array('image'),estateController.create);
router.get('/',estateController.getAll);
router.get('/:id',estateController.getSingle);
router.delete('/delete/:id',estateController.deleteEstate);
router.patch('/update/:id',verifyToken.verifyToken,upload.upload.array('image'),estateController.updateEstate);
router.patch('/like/:id', verifyToken.verifyTokenAndRole,likeController.like)
module.exports=router;