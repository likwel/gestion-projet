const express = require('express');
const http = require('http');
const app = express();
const port = 5000;
const path = require('path');
var bodyParser = require('body-parser');

const equipeRoutes = require ('./Routes/equipe')
const projetRoutes = require ('./Routes/projet')
const tacheRoutes = require ('./Routes/tache')
const agendaRoutes = require ('./Routes/agenda')

const { Sequelize, QueryTypes } = require('sequelize');
const sequelize = require('sequelize');

const db = require('./connexion');

app.use(bodyParser.json({limit: '50mb'}));
// app.use(express.json())
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// app.use(cookieParser())
app.set("view engine", "ejs");
// app.engine('ejs', require('ejs').__express);
app.use(express.static(path.join(__dirname, "public")));
require('dotenv').config();

// Test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))

const server = http.createServer(app);

//routes for the equipe API
app.use('/equipe', equipeRoutes)
app.use('/projet', projetRoutes)
app.use('/projet', tacheRoutes)
app.use('/agenda', agendaRoutes)

app.get('/', (req, res) => {
    res.render('index')
})



server.listen(port, () => {
    console.log(`Maintenant à l'écoute sur le port ${port}`);
});