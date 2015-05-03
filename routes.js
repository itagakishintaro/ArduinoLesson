'use strict';
var configRoutes;
var fs = require('fs');

configRoutes = function(app, server, passport) {
    app.get('/', function(request, response) {
        response.redirect('/index.html');
    });
}

module.exports = {configRoutes: configRoutes};