const { Router } = require('express');
const router = Router();
const species_controller = require('../controllers/species.controllers');

router.get('', species_controller.read_species);
router.get('/:id', species_controller.find_by_id);
router.post('', species_controller.create_species);
router.put('/:id', species_controller.update_species);
router.delete('/:id', species_controller.delete_species);


module.exports = router;