import * as dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

import userRouter from './router/user.router';
import authRouter from './router/auth.router';

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/users',userRouter);

const server = http.createServer(app);

server.listen(PORT,() => {
    console.log(`Listening on port: ${PORT}`);
});

