import { Request, Response } from 'express';
import logger from '../util/logger';

export class RegisterController {

  /*****************************************************************************************
   *
   *                                  Private Methods
   * 
   *****************************************************************************************/

  /*****************************************************************************************
  *                                  Helper Methods
  *****************************************************************************************/

  /*****************************************************************************************
  *
  *                            Public / Router Endpoint Methods
  * 
  *****************************************************************************************/

  public registerUser(request: Request, response: Response): void {
    const { userName, userEmail } = request.body;
    logger.warn(request.originalUrl);
    logger.info(`${userName} / ${userEmail} registered with ANAVRIN`);
    response.render('login', { layout: 'main' });
  }
}