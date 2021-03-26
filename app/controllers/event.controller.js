const { Event, Organizer } = require('../db/models');

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