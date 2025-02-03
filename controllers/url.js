const shortId = require('shortid');
const URL = require('../models/url');
const shortid = require('shortid');


async function createShortURL(req, res) {
    console.log("Request Body:", req.body); // ✅ Debugging line

    const body = req.body;
    if (!body.url) {
        return res.status(400).json({ message: 'URL is required' });
    }

    const shortId = shortid.generate();
    await URL.create({ shortId, redirectURL: body.url });

    return res.status(201).json({ shortId });
}

async function getAnalytics(req,res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.json({
        visitedHistory: result.visitedHistory.length,
        createdAt: result.createdAt,
        // analytics: result.visitedHistory,
        });    
}


module.exports = {
    createShortURL,
    getAnalytics,
};