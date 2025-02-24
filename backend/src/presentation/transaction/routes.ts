import { Router } from "express";
import { TransactionService } from "../services/transaction.service";
import { TransactionController } from "./controller";

export class TransactionRoutes {

    static get routes(): Router {

        const router = Router();

        const service = new TransactionService();

        const controller = new TransactionController(service);

        router.get('/', controller.getAll);
        router.get('/:id', controller.getByID);
        router.get('/:id', controller.getByAccountID);

        return router;
    }



}