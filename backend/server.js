const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoute = require('./routes/contact');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.status(200).send("Portfolio Server Running Successfully!");
});
app.use('/api/contact', contactRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`App Runnning in port ${PORT}\n Server Link: http://localhost:${PORT}`)
});