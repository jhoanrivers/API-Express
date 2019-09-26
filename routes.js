'use strict';

module.exports = function(app){

    var listtodo = require('./app/controller/appcontroller');

    app.route('/user')
    .get(listtodo.getAllUser);
    
    app.route('/user')
    .post(listtodo.createUser);

    app.route('/user')
    .put(listtodo.updateUser);

    app.route('/user/:id')
    .get(listtodo.getSingleUser);

    app.route('/user')
    .delete(listtodo.deleteUser);

    
}