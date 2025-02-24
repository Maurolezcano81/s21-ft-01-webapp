import { Request, Response } from "express";
import { TransactionTypeService } from "../services/transactionType.service";


export class TransactionTypeController {

    constructor(
        public readonly transactionTypeService: TransactionTypeService,
    ) { }

    create = (req: Request, res: Response) => {
        const { name } = req.body

        this.transactionTypeService.create(name)
            .then((data) => res.status(201).json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

    getAll = (req: Request, res: Response) => {

        this.transactionTypeService.getAll()
            .then((data) => res.json(data))
            .catch(error => { console.log(error); res.status(400).json({ error: error.message }) })
    }

    getByID = (req: Request, res: Response) => {
        const { id } = req.params

        const numberId = Number(id)

        this.transactionTypeService.getByID(numberId)
            .then((data) => res.json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

    getByName = (req: Request, res: Response) => {
        const { name } = req.params

        this.transactionTypeService.getByName(name)
            .then((data) => res.json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }


    update = (req: Request, res: Response) => {
        const { name } = req.body
        const { id } = req.params

        const numberId = Number(id)

        this.transactionTypeService.update(name, numberId)
            .then((data) => res.json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

    deleteByID = (req: Request, res: Response) => {
        const { id } = req.params

        const numberId = Number(id)

        this.transactionTypeService.deleteByID(numberId)
            .then((data) => res.json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

}