const os = require('os');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoute = require('./routes/contact');
const dotenv = require('dotenv');
const { getPinnedRepos } = require('./github/gitClient');

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

const allowedOrigins = [
    'http://localhost:4200',
    'http://192.168.1.19:4200',
    'http://192.168.1.21:4200',
    'http://192.168.0.3:4200',
    'http://192.168.0.4:4200',
    'http://192.168.1.23:4200'
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = `The CORS policy does not allow access from this origin: ${origin}`;
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true
}));

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
        res.status(500).json({ error: "Failed to fetch pinned repositories" });
    }
});

app.listen(PORT, "0.0.0.0", () => {
    const networkInterface = os.networkInterfaces();
    let networkAddress='localhost';
    for(const iface of Object.values(networkInterface)) {
        for(const alias of iface) {
            if(alias.family ==='IPv4' && !alias.internal) {
                networkAddress = alias.address;
            }
        }
    }
    console.log(`App Runnning on:
        -> Local: http://localhost:${PORT}
        -> Network: http://${networkAddress}:${PORT}`
    );
});