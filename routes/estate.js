const router=require('express').Router();
const estateController=require('../controllers/estateController');
const upload=require('../helpers/multer');

router.post('/create',upload.upload.array('image'),estateController.create);
router.get('/',estateController.getAll);
router.get('/:id',estateController.getSingle);
router.delete('/delete/:id',estateController.deleteEstate);
router.put('/update/:id',upload.upload.array('image'),estateController.updateEstate);
module.exports=router;