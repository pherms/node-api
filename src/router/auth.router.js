const VerifyUserMiddleware = require('../middlewares/authorization/verify.user.middleware');
const AuthorizationController = require('../controllers/AuthorizationController');
const AuthValidationMiddleware = require('../middlewares/authorization/auth.validation.middleware');
exports.routesConfig = function (app) {
    app.post('/auth', [
        VerifyUserMiddleware.hasAuthValidFields,
        VerifyUserMiddleware.isPasswordAndUserMatch,
        AuthorizationController.login
    ]);

    app.post('/auth/refresh', [
        AuthValidationMiddleware.validJWTNeeded,
        AuthValidationMiddleware.verifyRefreshBodyField,
        AuthValidationMiddleware.validRefreshNeeded,
        AuthorizationController.login
    ])
}