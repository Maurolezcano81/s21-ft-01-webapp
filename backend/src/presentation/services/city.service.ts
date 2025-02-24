import City from '../../data/models/city.model';

export class CityService {

    constructor() { }

    public async create(city: { name: string, country_id: number }) {

        try {
            await this.cityExists(city);
            const newCity = await City.create(city)
            return newCity

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    public async getAll() {
        try {
            const cities = await City.findAll();

            if (cities.length <= 0) throw new Error('No cities found')

            return cities;

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)

        }
    }

    public async getByID(id: number) {

        try {
            const city = await City.findByPk(id);

            if (!city) throw new Error('City not found')

            return city;

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    public async getByCountryID(country_id: number) {

        try {
            const cities = await City.findAll({ where: { country_id } });

            if (!cities) throw new Error('City not found by country id')

            return cities;

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    public async cityExists(city: { name: string, country_id: number }) {

        const res = await City.findOne({ where: { name: city.name, country_id: city.country_id } })

        if (res) throw new Error('City already exists')
        return
    }

    public async update(name: string, id: number) {

        try {
            const city = await City.findByPk(id);

            if (!city) throw new Error('City not found')

            city.name = name;

            await city.save();

            return city

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    public async deleteByID(id: number) {
        try {
            const city = await City.findByPk(id);

            if (!city) throw new Error('City not found')

            await city.destroy();

            return city

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }



    }



}