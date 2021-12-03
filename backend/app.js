const express = require('express');
const mongoose = require('mongoose');

const app = express();
const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');
const path = require('path');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

mongoose.connect('mongodb+srv://Duncan:ntgdfrvc5835@cluster0.svvns.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res) => {
    res.json({ message: 'Votre requête a bien été reçue !' }); 
 });

app.use('/api/stuff', sauceRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));
 
module.exports = app;