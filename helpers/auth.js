module.exports = (req, res, next)=>{
    if(req.session.userName)
        next();
    else
     res.redirect('/login');
}