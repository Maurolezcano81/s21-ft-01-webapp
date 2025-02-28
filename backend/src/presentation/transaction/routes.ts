import { Router } from "express";
import { TransactionService } from "../services/transaction.service";
import { TransactionController } from "./controller";
import { AccountService } from "../services/account.service";

export class TransactionRoutes {

    static get routes(): Router {

        const router = Router();
        const accountService = new AccountService();

        const service = new TransactionService(accountService);

        const controller = new TransactionController(service);

        router.get('/', controller.getAll);
        router.get('/:id', controller.getByID);
        router.get('/:id', controller.getByAccountID);
        router.get('/:id', controller.getByUserID);

        return router;
    }



}