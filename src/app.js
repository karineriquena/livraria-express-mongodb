import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';

db.on('error', console.log.bind(console, 'DB Connection Error!'));
db.once('open', () => console.log('DB Connection Successful!'));

const app = express();
app.use(express.json());

routes(app);

export default app;
