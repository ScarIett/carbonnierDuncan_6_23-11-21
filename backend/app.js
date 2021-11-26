const express = require('express');
const mongoose = require('mongoose');

const app = express();
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');

mongoose.connect('mongodb+srv://Duncan:ntgdfrvc5835@cluster0.svvns.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res) => {
    res.json({ message: 'Votre requête a bien été reçue !' }); 
 });

app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);
 
module.exports = app;