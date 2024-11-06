const { Router } = require('express');
const router = Router();
const diet_controller = require('../controllers/diet.controllers');

router.get('', diet_controller.read_diet);
router.get('/:id', diet_controller.find_by_id);
router.post('', diet_controller.create_diet);
router.put('/:id', diet_controller.update_diet);
router.delete('/:id', diet_controller.delete_diet);


module.exports = router;