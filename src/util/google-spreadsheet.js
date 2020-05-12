/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  GOOGLE_SERVICE_ACCOUNT_EMAIL,
  GOOGLE_PRIVATE_KEY
} from './secrets';
import {
  GoogleSpreadsheet
} from 'google-spreadsheet';
import logger from './logger';

export class SpreadsheetDatabase {

  GoogleSheetID;
  GoogleDocument;
  GoogleSheet;
  SheetIndex;
  initialized;
  headerValues;

  constructor(GoogleSheetID, SheetIndex) {
    this.headerValues = [];
    this.initialized = false;
    this.GoogleSheetID = GoogleSheetID;
    this.SheetIndex = SheetIndex;
    this.GoogleDocument = new GoogleSpreadsheet(this.GoogleSheetID);
  }
  /*****************************************************************************************
   *
   *                                  Private Methods
   * 
   *****************************************************************************************/

  _authenticateSession() {
    this.GoogleDocument.useServiceAccountAuth({
      // eslint-disable-next-line @typescript-eslint/camelcase
      client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
      // eslint-disable-next-line @typescript-eslint/camelcase
      private_key: GOOGLE_PRIVATE_KEY,
    });
  }

  async initialize() {
    try {
      // pass in private_key and client_email
      await this._authenticateSession();
      // loads this.GoogleDocument properties and worksheets
      await this.GoogleDocument.loadInfo();
      // loads this.GoogleSheet from this.GoogleDocument
      this.GoogleSheet = this.GoogleDocument.sheetsByIndex[this.SheetIndex];
      logger.info(`Reading from '${this.GoogleDocument.title}' - '${this.GoogleSheet.title}'`);

      await this.GoogleSheet.loadHeaderRow();
      this.headerValues = this.GoogleSheet.headerValues;
      this.initialized = true;

    } catch (e) {
      logger.error(`Error in loading sheet :: ${e}`);
    } finally {
      logger.info(`Header values set : [${this.headerValues}]`);
      logger.warn('Exiting initialization');
    }
  }

  _iterateColumns(databaseRow) {
    // return an object with values for all entries
    return this.headerValues.reduce((object, header) => {
      object[header] = databaseRow[header];
      return object;
    }, {});
  }

  _isInitialized() {
    return this.initialized;
  }

  /*****************************************************************************************
   *                            getter / setter Methods
   *****************************************************************************************/

  get sheetID() {
    return this.GoogleDocument.spreadsheetId;
  }

  get sheetHeaders() {
    return this.headerValues;
  }

  /*****************************************************************************************
   *
   *                                Public Endpoint Methods
   * 
   *****************************************************************************************/

  async getAllData({
    offset = 0,
    limit
  }) {
    if (!this._isInitialized()) {
      await this.initialize().catch(logger.error);
    }

    const rows = await this.GoogleSheet.getRows({
      offset: offset,
      limit: limit
    }).catch(logger.error);

    if (rows) {
      return rows.map((rowData) => this._iterateColumns(rowData));
    }

    return [];
  }

  async addData(data) {
    if (!this._isInitialized()) {
      await this.initialize().catch(logger.error);
    }

    return await this.GoogleSheet
      .addRow(data)
      .then((row, error) => {
        if (error) {
          throw(error);
        }
        return this._iterateColumns(row);
      });
  }
}