import { Request, Response } from 'express';
// import { SpreadsheetDatabase } from '../util/spreadsheet-database';
import { SpreadsheetDatabase } from '../util/google-spreadsheet';
import logger from '../util/logger';
import { add } from 'winston';

interface User {
  name: string;
  email: string;
}

export class RegisterController {

  anavrinRegistrationGSheetID = '1y1_dF58fYLiqPFYrPNZLFJ179sRWeuLA8Np9fn_4GeE';
  anavrinRegistrationSheetIndex = 0;
  GoogleDocument: SpreadsheetDatabase;

  constructor() {
    this.GoogleDocument = new SpreadsheetDatabase(this.anavrinRegistrationGSheetID, this.anavrinRegistrationSheetIndex);
  }

  /*****************************************************************************************
   *
   *                                  Private Methods
   * 
   *****************************************************************************************/

  private async _isUserRegistered(User: User): Promise<boolean> {
    /**
     * Get all data, check for same email ID
     */
    return true;
  }
  /*****************************************************************************************
  *                                  Helper Methods
  *****************************************************************************************/

  /*****************************************************************************************
  *
  *                            Public / Router Endpoint Methods
  * 
  *****************************************************************************************/

  public async registerUser(request: Request, response: Response) {
    const { userName, userEmail } = request.body;
    logger.warn(request.originalUrl);
    logger.info(`${userName} / ${userEmail} registered with ANAVRIN`);
    // response.render('login', { layout: 'main' });
    const addData = await this.GoogleDocument
      .addData({
        Name: userName,
        Email: userEmail,
        Date: new Date().toLocaleString()
      })
      .catch((err) => logger.error(`Error in adding Data ${err}`));

    if (addData) {
      response.json(addData);
    } else {
      response.status(424).send({ status: 424, message: 'failed to add data', type: 'internal' });
    }

    /**
     * 1. Validate Email
     * 2. Check if email already exits
     * 3. Add Email to database.
     */
  }

  public async updateUser(request: Request, response: Response) {

    /*********************************************************
     *                NOT YET IMPLEMENTED
     *********************************************************/
  }

  public async getUser(request: Request, response: Response) {

    /*********************************************************
    *                NOT YET IMPLEMENTED
    *********************************************************/
  }

  public async deleteUser(request: Request, response: Response) {

    /*********************************************************
     *                NOT YET IMPLEMENTED
     *********************************************************/
  }

  public async getAllUsers(request: Request, response: Response) {

    const { limit, offset } = request.body;
    const allData = await this.GoogleDocument
      .getAllData({ limit, offset })
      .catch((err) => logger.error(`Error in getAllData ${err}`));

    if (allData) {
      response.json(allData);
    } else {
      response.status(424).send({ status: 424, message: 'failed to fetch all data', type: 'internal' });
    }
  }
}