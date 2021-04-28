const { Event, Organizer, User } = require('../db/models');

exports.findAll = async (req, res) => {
    Event.findAll({
        attributes: ['id', 'name', 'description', 'image', 'eventStart'],
        include: {
            raw: true,
            model: Organizer,
            required:true,
            as: 'organizer',
            attributes: ['id', 'name', 'image']
        }
    })
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(500).json({
            error: err.message
        });
    });
};

exports.findOne = async (req, res) => {
    Event.findByPk(req.params.id, {
        attributes: ['id', 'name', 'description', 'image', 'quota', 'registrationStart', 'registrationEnd', 'eventStart', 'eventEnd'],
        include: {
            raw: true,
            model: Organizer,
            required: true,
            as: 'organizer',
            attributes: ['id', 'name', 'image']
        }
    })
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(500).json({
            error: err.message
        });
    });
};

exports.joinEvent = async (req, res) => {
    User.findByPk(req.userId)
    .then(user => {
        user.addEvent(req.body.eventId)
        .then(data => {
            if (!data) {
                return res.status(200).json({
                    message: `${user.name} is already joined this event`
                });
            }

            return res.status(200).json({
                message: `Event is successfully added to ${user.name}`,
                data: data
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