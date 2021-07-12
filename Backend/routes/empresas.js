const express = require('express');
const router =express.Router();

const { getEmpresas, getById, createEmpresa} = require('../controllers/empresasController');

router.get('/', getEmpresas);
router.get('/:rut_empresa', getById);
router.post('/create', createEmpresa);

module.exports = router;