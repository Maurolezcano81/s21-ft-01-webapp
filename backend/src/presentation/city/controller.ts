import { Request, Response } from "express";
import { CityService } from "../services/city.service";


export class CityController {

    constructor(
        public readonly cityService: CityService,
    ) { }

    create = (req: Request, res: Response) => {
        //TODO: Solve
        let { name, country_id } = req.body

        country_id = Number(country_id)

        const city = { name, country_id }

        this.cityService.create(city)
            .then((data) => res.status(201).json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

    getAll = (req: Request, res: Response) => {

        this.cityService.getAll()
            .then((data) => res.json(data))
            .catch(error => { console.log(error); res.status(400).json({ error: error.message }) })
    }

    getByID = (req: Request, res: Response) => {
        const { id } = req.params

        const numberId = Number(id)

        this.cityService.getByID(numberId)
            .then((data) => res.json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

    getByCountryID = (req: Request, res: Response) => {
        const { id } = req.params

        const numberId = Number(id)

        this.cityService.getByCountryID(numberId)
            .then((data) => res.json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

    update = (req: Request, res: Response) => {
        const { name } = req.body
        const { id } = req.params

        const numberId = Number(id)

        this.cityService.update(name, numberId)
            .then((data) => res.json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

    deleteByID = (req: Request, res: Response) => {
        const { id } = req.params

        const numberId = Number(id)

        this.cityService.deleteByID(numberId)
            .then((data) => res.json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

}