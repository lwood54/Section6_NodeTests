module.exports.add = (a, b) => a + b;

// Using setTimeout() to test async functions
module.exports.asyncAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
};

module.exports.square = (x) => x * x;

// simulating asyn square function
module.exports.asyncSquare = (x, callback) => {
    setTimeout(() => {
        callback(x * x);
    }, 1000);
};

module.exports.setName = (user, fullName) => {
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
};
