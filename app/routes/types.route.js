const { Router } = require('express');
const router = Router();
const types_controller = require('../controllers/types.controller');

router.get('', types_controller.read_type);
router.get('/:id', types_controller.find_by_id);
router.post('', types_controller.create_type);
router.put('/:id', types_controller.update_type);
router.delete('/:id', types_controller.delete_type);


module.exports = router;