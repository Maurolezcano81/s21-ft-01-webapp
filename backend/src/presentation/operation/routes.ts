import { Router } from "express";
import { OperationController } from "./controller";
import { OperationService } from "../services/operation.service";
import { TransactionService } from "../services/transaction.service";

export class OperationRoutes {

    static get routes(): Router {

        const router = Router();

        const transactionService = new TransactionService();
        const service = new OperationService(transactionService);

        const controller = new OperationController(service);

        router.get('/', controller.getAll);
        router.get('/:id', controller.getByID);
        router.get('/user/:user_id', controller.getByUserID);
        router.post('/', controller.create);
        router.post('/reverse', controller.reverse);
        // router.patch('/:id', controller.update);
        // router.delete('/:id', controller.deleteByID);

        return router;
    }



}