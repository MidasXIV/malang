import requestjs from 'request';
import cheerio from 'cheerio';
import { Request, Response } from 'express';

export class DividendController {

    public getDividendInfo(request: Request, response: Response): void {
        const ticker = request.params.ticker;
        response.send(`Dividend Info of ${ticker}`);
    }

    public getDividendHistory(request: Request, response: Response): void {
        /*
        ** Todo - error handling when ticker symbol is invalid
        ** Todo - do not hard code time intervals.
        */
        const yahooFinanceDividendHistoryURL = (ticker: string): string => `https://finance.yahoo.com/quote/${ticker}/history?period1=345427200&period2=1585353600&interval=div%7Csplit&filter=div&frequency=1d`;
        const ticker = request.query.ticker;
        console.log('fetching Info');
        requestjs({
            method: 'GET',
            url: yahooFinanceDividendHistoryURL(ticker),
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36'
            }
        }, (err, res, html) => {
            console.log('fetched Info');
            if (err) return console.error(err);

            const $ = cheerio.load(html);

            const dividendInformation: any = [];
            const dividendCurrency: string = $('div.Mt\\(20px\\) > span:nth-child(1) > span:nth-child(1)').text();

            $('table tbody').children("tr").each(function (index, row) {
                const rowInfo = $(row).children("td").map((_index, col) => $(col).text()).get();
                dividendInformation.push({
                    date: new Date(rowInfo[0]).getTime(),
                    dividend: parseFloat(rowInfo[1].replace('Dividend', '').trim())
                });
            });

            const dividendHistoryReturnObject = {
                "currency": dividendCurrency,
                "dividendHistory": dividendInformation
            };

            response.json(dividendHistoryReturnObject);
        });
    }
}