import Router from 'express';
const router = Router();

// Require controller modules.
import { RegisterController } from "../controllers/registerController";
const registerController = new RegisterController();

router.post('/', registerController.registerUser.bind(registerController));

export default router;

/** NOTES
 * 1. you have to use `app.use(express.urlencoded({ extended: true }));`
 * in order to access request body, else gives undefined.
 * 
 */