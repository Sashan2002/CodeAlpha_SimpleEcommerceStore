let users = [];

function addUser(user) {
    users.push(user);
}

function getUserByEmail(email) {
    return users.find(u => u.email === email);
}

function getUserById(id) {
    return users.find(u => u.id === id);
}

module.exports = {
    addUser,
    getUserByEmail,
    getUserById
};
