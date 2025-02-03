const express = require('express'); 
const { connectMOngoDB } = require('./connect'); 
const URL = require('../URL-Shortener/models/url');
const urlRouter = require('./routes/url'); 
const app = express();
const port = 8001;

app.use(express.json()); 
app.use('/url', urlRouter); 

app.use('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        { shortId },
        { $push: { visitedHistory: { timestamp: Date.now() } } },
    );
    res.redirect(entry.redirectURL);
});

connectMOngoDB('mongodb://localhost:27017/shortURL')
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });

// ❌ Remove duplicate app.listen(port)
