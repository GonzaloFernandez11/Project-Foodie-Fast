import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';


const app = express();
app.use( express.json() )
app.use( cors() );

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then(() => console.log('Connected to the database'))
    .catch(err => {
        console.error('Error connecting to the database:', err.message);
        process.exit(1); 
    });


app.get('/test', async (req: Request, res: Response) => {
    res.json({ message: 'Holaaaa!!!' });
});

app.listen(6000, () => {
    console.log('Server started on localhost:6000')
})