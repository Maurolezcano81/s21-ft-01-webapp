import { Request, Response } from "express";
import { CountryService } from "../services/country.service";


export class CountryController {

    constructor(
        public readonly countryService: CountryService,
    ) { }

    create = (req: Request, res: Response) => {
        const { name } = req.body

        this.countryService.create(name)
            .then((data) => res.status(201).json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

    getAll = (req: Request, res: Response) => {

        this.countryService.getAll()
            .then((data) => res.json(data))
            .catch(error => { console.log(error); res.status(400).json({ error: error.message }) })
    }

    getByID = (req: Request, res: Response) => {
        const { id } = req.params

        const numberId = Number(id)

        this.countryService.getByID(numberId)
            .then((data) => res.json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

    getByName = (req: Request, res: Response) => {
        const { name } = req.params

        this.countryService.getByName(name)
            .then((data) => res.json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }


    update = (req: Request, res: Response) => {
        const { name } = req.body
        const { id } = req.params

        const numberId = Number(id)

        this.countryService.update(name, numberId)
            .then((data) => res.json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

    deleteByID = (req: Request, res: Response) => {
        const { id } = req.params

        const numberId = Number(id)

        this.countryService.deleteByID(numberId)
            .then((data) => res.json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

}