import express from 'express';
import { db } from './DB_CONNECTION/dbConnection';
import { corsOptions } from './cors/cors.option';

import visits from './routes/visits';
import soldier from './routes/soldier';
import auth from './routes/auth';
import user from './routes/users';
import structure from './routes/structure';
import remission from './routes/remission';

const cors = require('cors');

const app = express();

const port = process.env.PORT || 3000;

app.use(cors(corsOptions))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', auth);
app.use('/users', user);
app.use('/soldier', soldier);
app.use('/remission', remission);
app.use('/visit', visits);
app.use('/structure', structure);

db.then(() => {
    app.listen(port, () => console.log(`server running at http://localhost:${port}`));
});