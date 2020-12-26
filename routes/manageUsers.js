const router = require('express').Router();

//Route To Render Manage Users
router.get('/', (req, res)=>{
    res.render('manageUsers/index');
});

//Route To Render Create User Page
router.get('/create', (req, res)=>{
    res.render('manageUsers/create');
});

//Route To Render Edit User Page
router.get('/edit', (req, res)=>{
    res.render('manageUsers/edit');
});



module.exports = router;