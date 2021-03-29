const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Users } = require('../db/models');

require('dotenv').config();

exports.signup = (req, res) => {
    Users.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        name: req.body.name,
        bio: req.body.bio,
        image: req.body.image
    })
    .then(user => {
        return res.status(200).json({
            message: "User created successfully!",
            user
        });
    })
    .catch(err => {
        return res.status(500).json({
            error: err.message
        });
    });
};

exports.login = (req, res) => {
    Users.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(user => {
        if (!user) {
            return res.status(404).json({ message: "User not found!" });
        }

        let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

        if (!passwordIsValid) {
            return res.status(401).json({
                accessToken: null,
                message: "Invalid Password!"
            })
        }

        let token = jwt.sign({ id: user.id }, process.env.SECRET, {
            expiresIn: 86400
        })

        return res.status(200).json({
            id: user.id,
            username: user.username,
            email: user.email,
            accessToken: token
        });
    })
    .catch(err => {
        return res.status(500).json({
            message: err.message
        });
    });
};