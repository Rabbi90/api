const path = require('path')
const userSchema = require('../models/user.schema')
const { v4: uuidv4 } = require('uuid');


const getHome = (req, res) => {
    res.sendFile(path.join(__dirname, '/../views/index.html'))
}


const getOneUser = async(req, res) => {
    try {
        const getOneUser = await userSchema.findOne({ id: req.params.id })
        res.status(200).json(getOneUser)
    } catch (er) {
        res.status(500).send(er.message)
    }
}


const getAllUser = async(req, res) => {
    try {
        const allUser = await userSchema.find()
        res.status(200).json(allUser)
    } catch (er) {
        res.status(500).send(er.message)
    }
}


const createUser = async(req, res) => {
    try {
        const newUser = new userSchema({
            id: uuidv4(),
            name: req.body.name,
            age: Number(req.body.age),
            grade: parseFloat(req.body.grade).toFixed(2)
        })
        await newUser.save()
        res.status(201).json(newUser)
    } catch (er) {
        res.status(500).send(er.message)
    }
}


const updateUser = async(req, res) => {
    try {
        const updateUser = await userSchema.findOne({ id: req.params.id })

        updateUser.name = req.body.name
        updateUser.age = Number(req.body.age)
        updateUser.grade = parseFloat(req.body.grade).toFixed(2)

        await updateUser.save()
        res.status(200).json(updateUser)
    } catch (er) {
        res.status(500).send(er.message)
    }
}

const deleteUser = async(req, res) => {
    try {
        await userSchema.deleteOne({ id: req.params.id })
        res.status(200).json({ message: 'User Deleted Successfully' })
    } catch (er) {
        res.status(500).send(er.message)
    }
}


module.exports = { getHome, getOneUser, getAllUser, createUser, updateUser, deleteUser }