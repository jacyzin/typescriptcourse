import { Request, Response } from 'express';
import * as HTTPStatus from 'http-status';
class UserControler {

    constructor() {}

    getAll(req: Request, res: Response) {   
        res.status(HTTPStatus.OK).json({
            message: 'ok'
        });
    }

    createUser(req: Request, res: Response) {   
        res.status(HTTPStatus.OK).json({
            message: 'ok'
        });
    }

    getById(req: Request, res: Response) {   
        res.status(HTTPStatus.OK).json({
            message: 'ok'
        });
    }

    updateUser(req: Request, res: Response) {   
        res.status(HTTPStatus.OK).json({
            message: 'ok'
        });
    }

    deleteUser(req: Request, res: Response) {   
        res.status(HTTPStatus.OK).json({
            message: 'ok'
        });
    }
}

export default UserControler;