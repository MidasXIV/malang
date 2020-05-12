import express from 'express';
import hbs from 'express-handlebars';
import logger from './util/logger';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// view engine setup
/** for somereason the engine name and the extension name should be same */
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main'
}));

import apiRouter from './routes/apiRouter';
import viewsRouter from './routes/viewsRouter';
import registrationRouter from './routes/registrationRouter'

app.use('/api', apiRouter);
app.use('/registration', registrationRouter);
app.use('/', viewsRouter);
app.listen(PORT, () => logger.debug(`Server started on port ${PORT}!`));
