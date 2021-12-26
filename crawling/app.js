'use strict';

import express from 'express';
import router from './router';
import service from './service';
import logger from 'morgan';
import dotenv from 'dotenv';
import moment from 'moment';
const now = () => {
    return moment().format('YYYY-MM-DD HH:mm:ss');
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);
app.use(logger('tiny'));

app.set('view engine', 'ejs');
dotenv.config();
service.macro();

const port = process.env.SERVER_PORT;
app.listen(port, (e) => {
    if (e) console.error(e);
    else console.info(`Server Is Started! `, now());
});