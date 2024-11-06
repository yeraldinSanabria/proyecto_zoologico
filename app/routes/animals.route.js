const { Router } = require('express');
const router = Router();
const animals_controller = require('../controllers/animals.controllers');

router.get('', animals_controller.read_animals);
router.get('/:id', animals_controller.find_by_id);
router.post('', animals_controller.create_animals);
router.put('/:id', animals_controller.update_animals);
router.delete('/:id', animals_controller.delete_animals);


module.exports = router;