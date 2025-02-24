import Transaction from '../../data/models/transaction.model';


export class TransactionService {

    constructor() { }

    public async create(name: string) {
        try {
            const transaction = await Transaction.create({ name })
            return transaction

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    public async getAll() {
        try {
            const transactions = await Transaction.findAll();

            if (transactions.length <= 0) throw new Error('No transactions found')

            return transactions;

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)

        }
    }

    public async getByID(id: number) {

        try {
            const transaction = await Transaction.findByPk(id);

            if (!transaction) throw new Error('Transaction not found')

            return transaction;

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    public async getByAccountID(account_id: string) {
        try {

            const transactions = await Transaction.findAll({ where: { account_id } })

            if (!transactions) throw new Error('Account has not transactions')

            return transactions;

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    public async update(name: string, id: number) {

        try {
            const transaction = await Transaction.findByPk(id);

            if (!transaction) throw new Error('Transaction not found')

            // transaction.name = name;

            await transaction.save();

            return transaction

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    public async deleteByID(id: number) {
        try {
            const transaction = await Transaction.findByPk(id);

            if (!transaction) throw new Error('Transaction not found')

            await transaction.destroy();

            return transaction

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }

    }



}