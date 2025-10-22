const express = require('express');
const router = express.Router();
const treeController = require('../controllers/treeController');

router.get('/', treeController.getAllTrees);
router.post('/', treeController.createTree);
router.delete('/:id', treeController.deleteTree);
router.get('/stats', treeController.getStats);

module.exports = router;