import express from 'express';
import { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

import router from './routes/routes';

app.get('/', (req: Request, res: Response) => {
    res.send('Malang Dividend portfolio tracker - stimulator');
});
app.use('/api', router);
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`))
