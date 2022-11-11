const jwt = require('./jwt')

const checkAuth = (req,res,next) => {
    try{
        if(req.headers.authorization == null){
            res.sendStatus(401);
        }else{
            let token = req.headers.authorization.split(' ')[1]
            jwt.checkToken(token)
            next();
        }
    }catch(err){
        console.log(err.message)
        res.status(401).send('token scaduto')
    }
}

module.exports = {
    checkAuth
}