//importing modules
const bcrypt = require("bcrypt");
const db = require('../connexion');
const jwt = require("jsonwebtoken");

const express = require('express');
const app = express();

// Assigning users to the variable User
const User = require('../models/equipe');

//signing a user up
//hashing users password before its saved to the database with bcrypt
const signup = async (req, res) => {
    try {
        const { username, email, roles, fullname, password } = req.body;
        const data = {
            username : req.body.username,
            email : req.body.email,
            roles : req.body.roles, 
            fullname : req.body.fullname, 
            password: await bcrypt.hash(req.body.password, 10),
        };

        // data.password = await bcrypt.hash(data.password, 10)

        //saving the user
        // console.log(req.body.checked);

        if(req.body.password == req.body.repassword && req.body.checked == "on"){
            User.create(data).then(rep=>{
                res.redirect("/")
            });
        }else{
            return res.status(409).send("Mot de passe invalide");
        }


        //if user details is captured
        //generate token with the user's id and the secretKey in the env file
        // set cookie with the token generated
        if (user) {
            let token = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: 1 * 24 * 60 * 60 * 1000,
            });

            // res.setHeader('Content-Type', 'application/json');

            res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true });
            // res.cookie("user", JSON.stringify(user, null, 2));
            // res.cookie("user", JSON.stringify(user, null, 2), {maxAge: 360000, httpOnly: true});

            //console.log("user", JSON.stringify(user, null, 2));
            //console.log(token);
            //send users details
            //res.render('login')
            // res.redirect("/")
            return res.status(200).send(user);
        } else {
            return res.status(409).send("Details are not correct");
        }

    } catch (error) {
        console.log(error);
    }
};


//login authentication

const login = async (req, res) => {
    try {
        // res.set('Content-Type', 'application/json');

        // console.log( req.body);

        const { email, password } = req.body;

        //find a user by their email
        const user = await User.findOne({
            where: {
                email: req.body.email
            }

        });

        //if user email is found, compare password with bcrypt
        if (user) {
            const isSame = await bcrypt.compare(password, user.password);

            //if password is the same
            //generate token with the user's id and the secretKey in the env file

            if (isSame) {
                let token = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET, {
                    expiresIn: 1 * 24 * 60 * 60 * 1000,
                });

                //if password matches wit the one in the database
                //go ahead and generate a cookie for the user
                // res.setHeader('Content-Type', 'application/json');
                res.cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true });
                res.cookie("user", JSON.stringify(user), {maxAge: 360000, httpOnly: true});
                //console.log("user", JSON.stringify(user, null, 2));
                //console.log(token);
                //send user data
                //res.redirect('/')
                return res.status(200).send(user);
            } else {
                return res.status(401).send("Authentication failed");
            }
        } else {
            return res.status(401).send("Authentication failed");
        }
    } catch (error) {
        console.log(error);
    }
};

const allUser = async (req, res) => {
    User.findAll().then(result => {
        res.send(result);
    })
}

const getUserById = async (req, res) => {
    User.findOne({
        where : {
            id : req.params.id
        }
    }).then(result => {
        res.send(result);
    })
}

const getAllManager = async (req, res) => {
    User.findAll({
        where : {
            roles : "SM"
        }
    }).then(result => {
        res.send(result);
    })
}

module.exports = {
    signup,
    login,
    allUser,
    getAllManager,
    getUserById,
};