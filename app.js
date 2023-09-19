const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const adminData = require('./routes/admin');
const shopRoute = require('./routes/shop');

const rootDir = require('./util/path');

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(shopRoute);
app.use('/admin', adminData.router);
app.use((req, res) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
})

app.listen(3000);