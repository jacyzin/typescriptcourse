import { Application } from 'express';

class Routes {

    constructor(app: Application) {
        this.getRoutes(app);
    }

    getRoutes(app: Application): void {
        app.route('/').get((reqt, res) => res.send('Página principal'));
        app.route('/ola/:nome').get((req, res) => res.send(`Hello ${req.params.nome}`));
    }
}

export default Routes;