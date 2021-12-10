const User = require('../models/User')

const usersControllers = {
    getUsers: async (req, res) => {
        let response
        try {
            response = await User.find()
        } catch (err) {
            console.error(err)
        }
        res.json(response)
    },
    addUser: async (req, res) => {
        const user = req.body
        try {
            response = await new User(user).save()
        } catch (err) { console.error(err) }
        res.json(response)
    },
    getUserByID: async (req, res) => {
        const id = req.params.id
        let response
        try {
            response = await User.findOne({ _id: id })
        } catch (err) { console.error(err) }
        res.json(response)
    },
    deleteUser: async (req, res) => {
        const id = req.params.id
        try {
            response = await User.findOneAndDelete({ _id: id })
        } catch (err) { console.error(err) }
        User.findOneAndDelete({ _id: id })
        res.json(response)
    },
    updateUser: async (req, res) => {
        const id = req.params.id
        const { email, password, fname, lname, img, country } = req.body
        let response

        try {
            response = await User.findOneAndUpdate({ _id: id }, { email, password, fname, lname, img, country }, { new: true })
        } catch (err) { console.error(err) }
        res.json(response)
    }

}

module.exports = usersControllers;