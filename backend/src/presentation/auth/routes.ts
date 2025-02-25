import { Router } from "express";
import { AuthController } from "./controller";
import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user.service";

export class AuthRoutes {

    static get routes(): Router {

        const router = Router();

        const userService = new UserService();
        const service = new AuthService(userService);

        const controller = new AuthController(service);

        router.post('/register', controller.register);
        router.post('/login', controller.login)

        return router;
    }



}