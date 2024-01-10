const express = require('express');
const app = express();


const index = async (req, res) => {
    res.render('calendar');
}

module.exports = {
    index,
};