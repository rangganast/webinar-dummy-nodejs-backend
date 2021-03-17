module.exports = app => {
    const eventRouter = require('./event.router');

    app.use('/api/event', eventRouter);
}