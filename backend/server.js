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
    "http:localhost:4200",
    "https://www.sarweshwaranrs.me",
    "https://sarweshwaranrs.me",
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
app.use('/contact', contactRoute);

app.get("/github/pinned", async (req, res) => {
    try {
        const repos = await getPinnedRepos();
        res.json(repos);
    } catch (error) {
        console.log(`Failed to fetch the pinned repos: ${error}`);
        res.status(500).json({ error: "Failed to fetch pinned repositories" });
    }
});

app.listen(PORT, "0.0.0.0", () => {
    const networkInterfaces = os.networkInterfaces();
    let networkAddress = "localhost";

    const addresses = [];
    for (const iface of Object.values(networkInterfaces)) {
        for (const alias of iface) {
            if (alias.family === "IPv4" && !alias.internal) {
                addresses.push(alias.address);
            }
        }
    }

    const preferred =
        addresses.find(addr => addr.startsWith("192.168.")) ||
        addresses.find(addr => addr.startsWith("10.")) ||
        addresses[0] ||
        "localhost";

    networkAddress = preferred;

    console.log(`App Running on:
        -> Local:   http://localhost:${PORT}
        -> Network: http://${networkAddress}:${PORT}
    `);
});
