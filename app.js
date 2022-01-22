const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')
require('dotenv').config()


const app = express();

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }))

const mongoURI = process.env.DB_CONNECTION;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(process.env.PORT || 3000, () => {
        console.log('connected');
    }))
    .catch((err) => console.log(err));


app.get('/', (req, res) => {
    res.redirect('/blogs')
    // res.sendFile('./views/index.html', {root: __dirname})
})

app.get('/about', (req, res) => {
    res.render('about', { title: "About" })
    // res.sendFile('./views/about.html', {root: __dirname})
})

app.use('/blogs', blogRoutes);

app.use((req, res) => {
    res.status(404).render('404', { title: "404" })
})