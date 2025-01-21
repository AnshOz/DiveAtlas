const express = require('express')
const {
    createRegion,
    getRegions,
    getRegion
} = require('../controllers/regionController')

const router = express.Router()

// GET
router.get('/', getRegions)

router.get('/:id', getRegion)

//POST
router.post('/', createRegion)

//DELETE
router.delete('/:id', (req, res) => {
    res.json({
        message: 'Dive sites DELETE endpoint'
    })
})

module.exports = router