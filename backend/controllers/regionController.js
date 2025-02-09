const Region = require ('../models/regionModel')
const mongoose = require('mongoose')

// get all regions
const getRegions = async (req, res) => {
    try {
        const regions = await Region.find({}).sort({createdAt: -1})
        res.status(200).json(regions)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
}

// get a single region
const getRegion = async (req, res) => {
    const {id} = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({message: 'Region not found'})
    }

    const region = await Region.findById(id)

    if (!region) {
        return res.status(404).json({message: 'Region not found'})
    }

    res.status(200).json(region)
}
    

// create a region
const createRegion = async (req, res) => {
    const {title, country} = req.body 

    try {
        const region = await Region.create({title, country})
        res.status(200).json(region)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
}
// delete a region
const deleteRegion = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such region"})
    }

    const region = await Region.findOneAndDelete({_id: id})

    if (!region) {
        return res.status(400).json({error: "No such region"})
    }

    res.status(200).json(workout)

}

// update a region
const updateRegion = async (req, res) => {
    const { id } =  req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such region"})
    }

    const region = await Region.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!region) {
        return res.status(400).json({error: "No such region"})
    }

    res.status(200).json(workout)
}

module.exports = {
    getRegions,
    getRegion,
    createRegion,
    deleteRegion,
    updateRegion
}