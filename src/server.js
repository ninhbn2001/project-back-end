import express from "express";
import { connectDB} from '*/config/mongodb';
import { env } from '*/config/enviroment';
import { api } from '*/routes'
import cors from 'cors'
import {corsOptions} from '*/config/cors';

const cookieParser = require("cookie-parser");

connectDB()
.then (() => console.log('connected'))
.then (() => bootServer())
.catch (error => {
    console.error(error)
    process.exit(1)
})

const app = express();
    
app.use(cookieParser());
app.use(cors(corsOptions))
app.use(express.json())


app.use('/routers', api);
const bootServer = () => {
    app.listen(env.PORT, env.HOST, () => {
        console.log(`Server is running on ${env.HOST}:${env.PORT}`);
    });
}