import { Router } from "express";
import { OperationController } from "./controller";
import { OperationService } from "../services/operation.service";

export class OperationRoutes {

    static get routes(): Router {

        const router = Router();

        const service = new OperationService();

        const controller = new OperationController(service);

        router.get('/', controller.getAll);
        router.get('/:id', controller.getByID);
        router.post('/', controller.create);
        router.patch('/:id', controller.update);
        router.delete('/:id', controller.deleteByID);

        return router;
    }



}