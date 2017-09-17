"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes = /** @class */ (function () {
    function Routes(app) {
        this.getRoutes(app);
    }
    Routes.prototype.getRoutes = function (app) {
        app.route('/').get(function (reqt, res) { return res.send('Página principal'); });
        app.route('/ola/:nome').get(function (req, res) { return res.send("Hello " + req.params.nome); });
    };
    return Routes;
}());
exports.default = Routes;
