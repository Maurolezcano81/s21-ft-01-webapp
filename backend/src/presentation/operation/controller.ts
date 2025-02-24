import { Request, Response } from "express";
import { OperationService } from "../services/operation.service";


export class OperationController {

    constructor(
        public readonly operationService: OperationService,
    ) { }

    create = (req: Request, res: Response) => {
        const { name } = req.body

        this.operationService.create(name)
            .then((data) => res.status(201).json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

    getAll = (req: Request, res: Response) => {

        this.operationService.getAll()
            .then((data) => res.json(data))
            .catch(error => { console.log(error); res.status(400).json({ error: error.message }) })
    }

    getByID = (req: Request, res: Response) => {
        const { id } = req.params

        const numberId = Number(id)

        this.operationService.getByID(numberId)
            .then((data) => res.json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

    getByName = (req: Request, res: Response) => {
        const { name } = req.params

        this.operationService.getByName(name)
            .then((data) => res.json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }


    update = (req: Request, res: Response) => {
        const { name } = req.body
        const { id } = req.params

        const numberId = Number(id)

        this.operationService.update(name, numberId)
            .then((data) => res.json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

    deleteByID = (req: Request, res: Response) => {
        const { id } = req.params

        const numberId = Number(id)

        this.operationService.deleteByID(numberId)
            .then((data) => res.json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

}