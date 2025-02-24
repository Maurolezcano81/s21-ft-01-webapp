import { Router } from "express";
import { GenericRoutes } from "./generic/routes";
import { CountryRoutes } from "./country/routes";
import { CityRoutes } from "./city/routes";
import { AuthRoutes } from "./auth/routes";

export class AppRoutes {

    static get routes(): Router {

        const router = Router();

        router.use('/api/generic', GenericRoutes.routes);
        router.use('/api/country', CountryRoutes.routes);
        router.use('/api/city', CityRoutes.routes);
        router.use('/api/auth', AuthRoutes.routes);

        return router;

    }



}