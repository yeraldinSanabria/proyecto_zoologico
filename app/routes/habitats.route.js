const { Router } = require('express');
const router = Router();
const habitats_controller = require('../controllers/habitats.controllers');

router.get('', habitats_controller.read_habitats);
router.get('/:id', habitats_controller.find_by_id);
router.post('', habitats_controller.create_habitats);
router.put('/:id', habitats_controller.update_habitats);
router.delete('/:id', habitats_controller.delete_habitats);


module.exports = router;