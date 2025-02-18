import { Router } from "express";
import { GenericRoutes } from "./generic/routes";

export class AppRoutes {

    static get routes(): Router {

        const router = Router();

        router.use('/api/generic', GenericRoutes.routes);

        return router;

    }



}