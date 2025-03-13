import { Request, Response } from "express";
import { GenericService } from "../services/generic.service";


export class GenericController {

    constructor(
        public readonly genericService: GenericService,
    ) { }

    create = (req: Request, res: Response) => {
        const { data } = req.body


        this.genericService.create(data)
            .then((data) => res.json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

    getAll = (req: Request, res: Response) => {

        this.genericService.getAll()
            .then((data) => res.json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

    getByID = (req: Request, res: Response) => {
        const { id } = req.params


        this.genericService.getByID(id)
            .then((data) => res.json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

    update = (req: Request, res: Response) => {
        const { data } = req.body
        const { id } = req.params

        this.genericService.update(data)
            .then((data) => res.json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

    deleteByID = (req: Request, res: Response) => {
        const { id } = req.body

        this.genericService.deleteByID(id)
            .then((data) => res.json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

}