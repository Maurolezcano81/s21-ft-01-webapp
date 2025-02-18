import { Router } from "express";
import { GenericService } from "../services/generic.service";
import { GenericController } from "./controller";

export class GenericRoutes {

    static get routes(): Router {

        const router = Router();

        const service = new GenericService();

        const controller = new GenericController(service);

        router.get('/', controller.getAll);
        router.get('/:id', controller.getByID);
        router.post('/', controller.create);
        router.patch('/:id', controller.update);
        router.delete('/:id', controller.deleteByID);

        return router;
    }



}