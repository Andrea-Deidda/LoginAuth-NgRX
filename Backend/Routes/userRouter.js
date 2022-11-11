const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const userModelSchema = require('../Models/userModel')

router.post('/signup', async(req, res) =>{
    const registerUserData = {
        name: req.body.name,
        surname: req.body.surname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        dob: req.body.dob
    }
    const salt = await bcrypt.genSalt(10)
    await bcrypt.hash(req.body.password, salt).then(hashedPassword => {
        if(hashedPassword) {
            console.log('hashed passoword ', hashedPassword)
            registerUserData.password = hashedPassword
        }
    })
    await userModelSchema.create(registerUserData).then(userStoredData => {
        if(userStoredData && userStoredData._id){
            console.log('user stored data ', userStoredData)
            res.json({status: 'ok', data: userStoredData})
        }
    }).catch(err => {
        if(err){
            res.json({status:'error', data: err})
        }
    })
})



module.exports = router