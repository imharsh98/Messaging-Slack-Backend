import express from 'express';
import { StatusCodes } from 'http-status-codes';

import connectDB from './config/dbconfig.js';
import { PORT } from './config/serverConfig.js';
import apiRouter from './routes/apiRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
    return res.status(StatusCodes.OK).json({ message: 'pong' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port. ${PORT}`);
    connectDB();
});

// https://github.com/singhsanket143/Messaging-Slack-Backend