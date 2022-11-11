const express = require('express');
const router = express.Router();
const jwt = require('../Middleware/jwt')
const userModelSchema = require('../Models/userModel')
const bcrypt = require('bcryptjs')


router.post('/', async (req, res) => {
    username = req.body.username,
    password = req.body.password

    const checkUser = await userModelSchema.findOne({'username': req.body.username})
    
    if(checkUser != null){
        console.log('utente esistente', checkUser.email)
        bcrypt.compare(password, checkUser.password, function(err, response){
            if(!err){
                if(response){
                    let token = jwt.setToken(checkUser.id, username)
                    let payload = jwt.getPayload(token)
                    res.json({status:'ok', data:{user: checkUser, token: token, payload: payload}})
                }else {
                    res.send(401, 'password errata')
                    console.log('password errata')
                }
            }
        })
    }else {
        res.send(401, 'utente non trovato')
        console.log('utente non trovato')
    }
})



module.exports = router;