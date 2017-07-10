var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
    // check if the email already exists
    // save the user to the database
    db.saveUser({
        email: email,   // REMEMBER: in ES6, you don't have to duplicate if variable name is the same as key
        password        // like this, for example
    });
    // send the welcome email
};
