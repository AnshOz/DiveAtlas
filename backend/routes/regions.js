const express = require('express')
const {
    createRegion,
    getRegions,
    getRegion,
    deleteRegion,
    updateRegion
} = require('../controllers/regionController')

const router = express.Router()

// GET
router.get('/', getRegions)

router.get('/:id', getRegion)

// POST
router.post('/', createRegion)

// DELETE
router.delete('/:id', deleteRegion)

// UPDATE
router.patch('/:id', updateRegion)

module.exports = router