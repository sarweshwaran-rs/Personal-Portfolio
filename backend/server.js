const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoute = require('./routes/contact');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.status(200).send("Portfolio Server Running Successfully!");
});
app.use('/api/contact', contactRoute);


app.listen(PORT, ()=>{
    console.log(`App Runnning in port ${PORT}\nServer Link: http://localhost:${PORT}`)
});