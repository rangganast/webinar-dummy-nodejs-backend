const { Event, Organizer } = require('../db/models');

exports.findAll = async (req, res) => {
    Event.findAll({
        include: {
            raw: true,
            model: Organizer,
            required:true,
            as: 'organizer',
            attributes: ['name', 'image']
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