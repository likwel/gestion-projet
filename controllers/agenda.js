const express = require('express');
const app = express();


const index = async (req, res) => {
    res.render('agenda');
}

module.exports = {
    index,
};