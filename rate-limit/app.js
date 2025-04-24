const express = require('express');
const {rateLimit} = require("express-rate-limit");
const app = express();
const port = 3000;

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    message: "Too many requests, Try again in 15 mins"
})

app.use("/api",limiter);

app.get('/api/v1', (req, res) => {
    res.json(
        [
            {
                "id": 1,
                "title": "NodeJS",
                "description": "Javascript runtime built on Chrome's V8 Javascript engine."
            }
        ]
    )
});

app.get('/login', (req, res) => {
    res.send("imaginary Login Form")
});

app.listen(port, () => console.log(`App listening on http://localhost:${port}!`));