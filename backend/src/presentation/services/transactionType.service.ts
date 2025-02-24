import TransactionType from '../../data/models/operationType.model';


export class TransactionTypeService {

    constructor() { }

    public async create(name: string) {
        try {
            await this.getByName(name);
            const transactionType = await TransactionType.create({ name })
            return transactionType

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    public async getAll() {
        try {
            const transactionTypes = await TransactionType.findAll();

            if (transactionTypes.length <= 0) throw new Error('No transaction types found')

            return transactionTypes;

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)

        }
    }

    public async getByID(id: number) {

        try {
            const transactionType = await TransactionType.findByPk(id);

            if (!transactionType) throw new Error('Transaction type not found')

            return transactionType;

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    public async getByName(name: string) {

        const transactionType = await TransactionType.findOne({ where: { name } })

        if (transactionType) throw new Error('Transaction type already exists')
        return
    }

    public async update(name: string, id: number) {

        try {
            const transactionType = await TransactionType.findByPk(id);

            if (!transactionType) throw new Error('Transaction type not found')

            transactionType.name = name;

            await transactionType.save();

            return transactionType

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    public async deleteByID(id: number) {
        try {
            const transactionType = await TransactionType.findByPk(id);

            if (!transactionType) throw new Error('Transaction type not found')

            await transactionType.destroy();

            return transactionType

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }

    }



}