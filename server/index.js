import express from 'express';
import { PORT, mongoDBURL} from './config.js';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

//app.use(cors());
//Option 2: Allow Custom Origins
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  })
);

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Connected to backend');
});

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });