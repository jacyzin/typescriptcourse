"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandlerApi(err, req, res, next) {
    console.log("api error: " + err);
    res.status(500).json({
        errorCode: 'ERR-001',
        message: 'Erro interno do servidor'
    });
}
exports.errorHandlerApi = errorHandlerApi;
