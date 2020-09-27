const express = require('express');
const path = require('path');

const app = express();

const users = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
    res.render('index', { pageTitle: 'Add User' });
});

app.get('/users', (req, res, next) => {
    res.render('users', { pageTitle: 'Users', users: users });

});

app.post('/add-user', (req, res, next) => {
    users.push({ name: req.body.username });
    res.redirect('/users');
})




app.listen(3000);