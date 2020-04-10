import Router from 'express';
import { Request, Response } from 'express';
const router = Router();

router.get('/', function (request: Request, response: Response) {
    response.render('index', { layout: 'main' });
});

export default router;