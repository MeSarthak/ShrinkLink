const mongoose = require('mongoose');   

async function connectMOngoDB(url) {
    return mongoose.connect(url);
}

module.exports = {connectMOngoDB,};