import { Router } from "express";
import { CityController } from "./controller";
import { CityService } from "../services/city.service";

export class CityRoutes {

    static get routes(): Router {

        const router = Router();

        const service = new CityService();

        const controller = new CityController(service);

        router.get('/', controller.getAll);
        router.get('/:id', controller.getByID);
        router.get('/country/:id', controller.getByCountryID);
        router.post('/', controller.create);
        router.patch('/:id', controller.update);
        router.delete('/:id', controller.deleteByID);

        return router;
    }



}