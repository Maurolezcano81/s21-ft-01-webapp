import Operation from '../../data/models/operation.model';


export class OperationService {

    constructor() { }

    public async create(name: string) {
        try {
            await this.getByName(name);
            const operation = await Operation.create({ name })
            return operation

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    public async getAll() {
        try {
            const operations = await Operation.findAll();

            if (operations.length <= 0) throw new Error('No operation types found')

            return operations;

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)

        }
    }

    public async getByID(id: number) {

        try {
            const operation = await Operation.findByPk(id);

            if (!operation) throw new Error('Operation not found')

            return operation;

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    public async getByName(name: string) {

        const operation = await Operation.findOne({ where: { name } })

        if (operation) throw new Error('Operation already exists')
        return
    }

    public async update(name: string, id: number) {

        try {
            const operation = await Operation.findByPk(id);

            if (!operation) throw new Error('Operation not found')

            // operation.name = name;

            await operation.save();

            return operation

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    public async deleteByID(id: number) {
        try {
            const operation = await Operation.findByPk(id);

            if (!operation) throw new Error('Operation not found')

            await operation.destroy();

            return operation

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }

    }



}