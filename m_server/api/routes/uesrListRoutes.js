'use strict';

module.exports = function(req, res) {
    const userList = require('../controllers/userListController');

    app.route('/users')
        .get(userList.list_all_users)
            .post(userList.ceart_a_user);

    app.route('/users/:userId')
    .get(userList.read_a_user);
};
