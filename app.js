const express = require('express');
const ejs = require('ejs');
const path = require('path');

// Init app
const app = express();

// Route
const indexRout = require('./routes/index');
const uploadRout = require('./routes/upload');

app.use('/', indexRout);
app.use('/', uploadRout);

// EJS
app.set('view engine', 'ejs');

// Public Folder
app.use(express.static('./public'));

// Upload
app.use('./public/uploads', express.static(path.join(__dirname, 'public/uploads')));

// PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on PORT ${PORT}`));