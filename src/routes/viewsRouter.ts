import Router from 'express';
import { Request, Response } from 'express';
const router = Router();

router.get('/', function (request: Request, response: Response) {
    response.render('index', { layout: 'main' });
});

router.get('/register', function (request: Request, response: Response) {
    response.render('login', { layout: 'main' });
});

router.get('/portfolio', function (request: Request, response: Response) {
    response.render('portfolio', { layout: 'main' });
});

router.get('/overview', function (request: Request, response: Response) {
    response.render('overview', { layout: 'main' });
});

export default router;