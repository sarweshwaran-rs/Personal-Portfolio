const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoute = require('./routes/contact');
const dotenv = require('dotenv');
const { getPinnedRepos } = require('./utils/githubClient');

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors({origin:'http://localhost:4200'}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.status(200).send("Portfolio Server Running Successfully!");
});
app.use('/api/contact', contactRoute);

app.get("/api/github/pinned", async (req, res) => {
    try {
        const repos = await getPinnedRepos();
        res.json(repos);
    } catch (error) {
        console.log(`Failed to fetch the pinned repos: ${error}`);
        res.status(500).json({error: "Failed to fetch pinned repositories"});
    }
});

app.listen(PORT, ()=>{
    console.log(`App Runnning in port ${PORT}\nServer Link: http://localhost:${PORT}`)
});