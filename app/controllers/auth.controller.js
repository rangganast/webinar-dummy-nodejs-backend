const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../db/models');

require('dotenv').config();

exports.signup = (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    })
    .then(user => {
        return res.status(200).json({
            message: "User created successfully!",
            data: user
        });
    })
    .catch(err => {
        return res.status(500).json({
            error: err.message
        });
    });
};

exports.login = (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
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

exports.profile = (req, res) => {
    User.findByPk(req.userId, { attributes: { exclude: ['password'] }})
    .then(user => {
        return res.status(200).json({
            user: user
        });
    })
    .catch(err => {
        return res.status(500).json({
            error: err.message
        })
    });
};

exports.userEvents = async (req, res) => {
    await User.findByPk(req.userId)
    .then(user => {
        user.getEvents()
        .then(events => {
            return res.status(200).json({
                data: events
            });
        })
        .catch(err => {
            return res.status(500).json({
                error: err.message
            });
        });
    })
    .catch(err => {
        return res.status(500).json({
            error: err.message
        });
    });
};