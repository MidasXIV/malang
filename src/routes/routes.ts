import Router from 'express';
const router = Router();

// Require controller modules.
import { DividendController } from "../controllers/dividendController";
const dividendController = new DividendController();

// Home page route.
router.get('/', function (req, res) {
  res.send('API home page !');
});


// About page route.
router.get('/about', function (req, res) {
  res.send('About this API');
});

//dividends
// router.get('/dividend/:ticker', dividends.getDividendInfo);
// router.get('/dividendHistory/:ticker', dividends.getDividendHistory);
//dividends
router.get('/dividend/:ticker', dividendController.getDividendInfo);
router.get('/dividendHistory/:ticker', dividendController.getDividendHistory);

export default router;