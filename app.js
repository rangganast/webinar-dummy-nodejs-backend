// import libraries
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const db = require('./app/db/models');
const path = require('path');

// dotenv
require('dotenv').config();

// cors options
var corsOptions = {
    origin: ["http://localhost:8080", "http://localhost:8081"]
};

// middlewares
app.use('/', express.static(path.join(__dirname, 'app/static')));
app.use(cors(corsOptions));
app.use(morgan('tiny'));
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Synchronize sequelize
// db.sequelize.sync({ force: true }, () => {
//     console.log('DB is synced.');
// });
db.sequelize.sync();

// router
require('./app/routers')(app);

// listening to port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`);
});