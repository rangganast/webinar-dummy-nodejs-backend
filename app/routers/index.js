module.exports = app => {
    const eventRouter = require('./event.router');

    const authRouter = require('./auth.router');

    app.use('/api/event', eventRouter);

    app.use('/api/auth', authRouter);
}