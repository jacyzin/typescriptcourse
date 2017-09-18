"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function dbErrorHandler(res, err) {
    console.log("Um erro aconteceu " + err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        code: 'ERR-01',
        message: 'Erro ao criar usuário'
    });
}
exports.dbErrorHandler = dbErrorHandler;
