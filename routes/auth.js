const router = require('express').Router();
const UserModel = require("../model/UserModel")

//Mehtod To Render Login Page
router.get('/login', async(req, res)=>{
    res.render('auth/login', {error: false, errorMessages: [], email: '', password: ''});
})

//Route To Login user
router.post('/login', async(req, res)=>{
    try {
        let user = await UserModel.findOne({email: req.body.email});
        //If User Exist Then Proceed Further Otherwise Send User Does Not Exist Error
        if(user){
            if(user.password === req.body.password){
                console.log(user);
                req.session.userName = user.firstName + " " + user.lastName;
                req.session.email = user.email;
                req.session.userId = user._id;
                res.redirect('/manageUsers');  
            }else{
                res.render('auth/login', {error: true, errorMessages: ['Password Does Not Match'], email: req.body.email, password: req.body.password})
            }
        }else{
            res.render('auth/login', {error: true, errorMessages: ['User Does Not Exist'], email: req.body.email, password: req.body.password})
        }
    } catch (error) {
        res.locals.message = error.message;
        res.locals.error = req.app.get('env') === 'development' ? error : {};
      
        // render the error page
        res.status(error.status || 500);
        res.render('error');
    }
})

module.exports = router;