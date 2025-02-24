import { Router } from "express";
import { TransactionTypeController } from "./controller";
import { TransactionTypeService } from "../services/transactionType.service";

export class TransactionTypeRoutes {

    static get routes(): Router {

        const router = Router();

        const service = new TransactionTypeService();

        const controller = new TransactionTypeController(service);

        router.get('/', controller.getAll);
        router.get('/:id', controller.getByID);
        router.post('/', controller.create);
        router.patch('/:id', controller.update);
        router.delete('/:id', controller.deleteByID);

        return router;
    }



}