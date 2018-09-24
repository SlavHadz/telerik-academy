const usersList = [{
    id: 1,
    username: 'StarLord',
    password: 'ISuckAtSavingTheWorld'
}];

const users = {
    findById(id) {
        id = parseInt(id, 10);
        const user =
            usersList.find((u) => u.id === id);
        return new Promise((resolve, reject) => {
            if (!user) {
                return reject('No such user');
            }
            return resolve(user);
        })
    },
    findByUsername(username) {
        const usernameToLower = username.toLowerCase();
        const user =
            usersList.find((u) => u.username.toLowerCase() === usernameToLower);
        return new Promise((resolve, reject) => {
            if (!user) {
                return reject('No such user');
            }
            return resolve(user);
        })
    }
}

module.exports = {
    users,
}