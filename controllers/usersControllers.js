const User = require('../models/User')
const bcrypt = require("bcryptjs")
const joi = require("joi")
const jwt = require('jsonwebtoken')



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
    addUser: async (req, res, next) => {

        const { fname, lname, email, password, img, country, google } = req.body
        const hashedPassword = bcrypt.hashSync(password)
        const newUser = new User({ fname, lname, email, password: hashedPassword, img, country, google })
        try {
            let repeatedUser = await User.findOne({ email: email })
            if (repeatedUser) {
                //res.json({ success: false, error: [{message: "Email is already being used"}] })
                throw new Error("Email is already being used")
            }
            await newUser.save()
            const token = jwt.sign({...newUser}, process.env.SECRET_KEY)
            res.json({ success: true, response: {token, fname: newUser.fname, img: newUser.img}, error: null })
        } catch (error) {
            console.log(error.toString())
            res.json({success:false, response:[{message: error}], error:[{message:error.toString()}] })
        }

    },
    signUser: async (req, res) => {
        
        const { email, password,google } = req.body

        try {
            let savedUser = await User.findOne({ email: email })

            if(savedUser.google && !google){
                //res.json({ success: false, error: [{message: "Google accounts must be accessed via 'Sign in with Google' button"}] })
                throw new Error("Google accounts must be accessed via 'Sign in with Google' button")
            }

            if (!savedUser) {
                //res.json({ success: false, error: [{message: "Incorrect email and/or password"}] })
                throw new Error("Incorrect email and/or password")
            }

            let match = bcrypt.compareSync(password, savedUser.password)
            if (!match) {
                //res.json({ success: false, error: [{message: "Incorrect email and/or password"}] })
                throw new Error("Incorrect email and/or password")
            }
            const token = jwt.sign({...savedUser}, process.env.SECRET_KEY)
            
            res.json({ success: true, response: { token, fname: savedUser.fname, img: savedUser.img }, error: null })
        } catch (error) {
            console.log(error)
            res.json({success:false, response: [{message: error}], error: [{message: error.toString()}]})
        }
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