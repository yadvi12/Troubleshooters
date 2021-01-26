const express = require('express'),
    app = express(),
    mongoose = require("mongoose"),
    ejs = require('ejs'),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    User = require("./models/user");
//Connecting database
mongoose.connect("mongodb://localhost/auth_demo");
app.use(require("express-session")({
    secret: "Any normal Word",       //decode or encode session
    resave: false,
    saveUninitialized: false
}));
passport.serializeUser(User.serializeUser());       //session encoding
passport.deserializeUser(User.deserializeUser());   //session decoding
passport.use(new LocalStrategy(User.authenticate()));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded(
    { extended: true }
))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(passport.initialize());
app.use(passport.session());

//=======================
//      R O U T E S
//=======================



app.get("/userprofile", isLoggedIn, (req, res) => {
    res.render("userprofile");
})
//Auth Routes
app.get("/login", (req, res) => {
    res.render("login");
});
app.post("/login", passport.authenticate("local", {
    successRedirect: "/userprofile",
    failureRedirect: "/login"
}), function (req, res) {
});
app.get("/signup", (req, res) => {
    res.render("signup");
});
app.post("/signup", (req, res) => {

    User.register(new User({ username: req.body.username, age: req.body.age, name: req.body.name }), req.body.password, function (err, user) {
        if (err) {

            console.log(err);
            res.render("error");
        }
        passport.authenticate("local")(req, res, function () {

            res.redirect("/login");
        })
    })
})

app.get('/', (req, res) => {
    res.render('index', { page: 'index' })
})
app.get('/index', (req, res) => {
    res.render('index', { page: 'index' })
})
app.get('/vote', (req, res) => {
    res.render('vote', { page: 'vote' })
})
app.get('/statistics', (req, res) => {
    res.render('statistics', { page: 'statistics' })
})
app.get('/contact', (req, res) => {
    res.render('contact', { page: 'contact' })
})
app.get('/admin_login', (req, res) => {
    res.render('admin_login', { page: 'admin_login' })
})

app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("vote");
});
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}
//Listen On Server
app.listen(process.env.PORT || 3000, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Server Started At Port 3000");
    }

});









