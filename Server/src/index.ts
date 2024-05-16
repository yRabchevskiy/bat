import express from 'express';
import { json } from 'body-parser';
import { soldierRouter } from './routes/soldier';
import mongoose, { ConnectOptions } from 'mongoose';
import cors from 'cors';


const app = express();


const allowedOrigins = ['http://localhost:4200'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));
app.use(json());
app.use(soldierRouter);

mongoose.connect('mongodb://localhost:27017/202').then(() => {
    console.log('Db connect work');
}).catch(() => {
    console.log('db not working');
});

app.listen(3000, () => {
    console.log('Server start in port 3000');
});
