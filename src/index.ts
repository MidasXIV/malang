import express from 'express';
import { Request, Response } from 'express';
import hbs from 'express-handlebars';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('public'));

// view engine setup
/** for somereason the engine name and the extension name should be same */
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main'
}));

import apiRouter from './routes/apiRouter';
import viewsRouter from './routes/viewsRouter';

app.use('/', viewsRouter);
app.use('/api', apiRouter);
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`))
