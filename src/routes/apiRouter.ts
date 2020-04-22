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
router.get('/dividend/',  dividendController.getDividendInfo.bind(dividendController));
router.get('/dividendHistory/', dividendController.getDividendHistory.bind(dividendController));

/**
 * router.get('/dividendHistory/:ticker', dividendController.getDividendHistory);
 * use : const ticker = request.params.ticker; in controller
 * URL : http://localhost:5000/api/dividendHistory/AAPL
 */

 /**
  * router.get('/dividendHistory/', dividendController.getDividendHistory);
  * use : const ticker = request.query.ticker;
  * URL : http://localhost:5000/api/dividendHistory/?ticker=AAPL
  */

  /**
   * router.get('/dividend/:ticker', dividendController.getDividendInfo);
   * has scope issues, so all methods inside the class cannot call eachother using 'this'
   * https://stackoverflow.com/questions/40018472/implement-express-controller-class-with-typescript
   * 
   * solution 1
   * router.get("/dividend/:ticker', dividendController.getDividendInfo.bind(dividendController));
   */
export default router;