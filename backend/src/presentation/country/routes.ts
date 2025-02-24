import { Router } from "express";
import { CountryController } from "./controller";
import { CountryService } from "../services/country.service";

export class CountryRoutes {

    static get routes(): Router {

        const router = Router();

        const service = new CountryService();

        const controller = new CountryController(service);

        router.get('/', controller.getAll);
        router.get('/:id', controller.getByID);
        router.post('/', controller.create);
        router.patch('/:id', controller.update);
        router.delete('/:id', controller.deleteByID);

        return router;
    }



}