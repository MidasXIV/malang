import Router from 'express';
import { Request, Response } from 'express';
import logger from '../util/logger';
const router = Router();

/** dividend simulator page */
router.get('/', function (request: Request, response: Response) {
    response.render('index', { layout: 'main', active: { home: true } });
});

/** registration page */
router.get('/register', function (request: Request, response: Response) {
    response.render('login', { layout: 'main', active: { register: true } });
});

/** dividend portfolio page */
router.get('/portfolio', function (request: Request, response: Response) {
    response.render('portfolio', { layout: 'main', active: { portfolio: true } });
});

/** overview page */
router.get('/overview', function (request: Request, response: Response) {
    response.render('overview', { layout: 'main', active: { overview: true } });
});

/** Invalid page routes */
router.get('/*', function (request: Request, response: Response) {
    logger.warn(`Invalid page <=> ${request.ip} tried to reach ${request.originalUrl}`);
    response.render('page-not-found', { layout: 'main' });
});

export default router;