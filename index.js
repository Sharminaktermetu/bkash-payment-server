const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

// const corsOptions = {
//     origin: 'http://localhost:5173/',
//     credentials: true,
// };

// Enable CORS with the configured options
app.use(cors());
dotenv.config();
app.use(bodyParser.json());

app.use('/api', require('./routes/routes'));

// const db = async () => {
//     try {
//         await mongoose.connect(process.env.db_url, { useNewUrlParser: true, useUnifiedTopology: true });
//         console.log('DB connected');
//     } catch (error) {
//         console.error('DB connection error:', error);
//     }
// };
// db();

const port = process.env.PORT || 5000; // Use port 3000 if PORT is not defined in the environment

app.get('/', (req, res) => res.send('Server is running'));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
