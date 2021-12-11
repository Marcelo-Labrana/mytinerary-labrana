const User = require('../models/User')
const bcrypt = require("bcryptjs")

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
        const {fname, lname, email, password, img, country} = req.body
        const hashedPassword = bcrypt.hashSync(password)
        const newUser = new User({fname,lname,email,password:hashedPassword,img,country})
        try {
            let repeatedUser = await User.findOne({email:email})
            if(repeatedUser) throw new Error 
            await newUser.save()
            res.json({success:true, response: newUser, error: null})
        } catch (error) { 
            console.error(error) 
            res.json({success: false, response: error.message})
        }
        
    },
    signUser: async (req, res)=>{
        console.log(req.body)
        const {email, password} = req.body
        
        try{
            let savedUser = await User.findOne({email:email})
            
            if (!savedUser) throw new Error("Incorrect email and/or password")

            let match = bcrypt.compareSync(password, savedUser.password)
            console.log(match)
            if (!match) throw new Error ("Incorrect email and/or password")
            res.json({success:true, response: {fname: savedUser.fname}, error:null})
        }catch(error){
            res.json({success:false, response:error.message, error:error})
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