// connect express package
const express = require('express');

// set express variable to use methods
var app = express();

// connect an html by using an http handler
app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'ToDo App v1.0'
    });
});

// creating express route for /users
app.get('/users', (req, res) => {
    res.send([
        {name: 'Logan', age: 35}, {name: 'Tiffany', age: 35}, {name: 'Amrynn', age: 5}, {name: 'Eisley', age: 5}
    ]);
});
// tell node what port to use for the server
app.listen(3000);
module.exports.app = app;
