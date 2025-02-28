import Account from '../../data/models/account.model';
import Transaction from '../../data/models/transaction.model';
import { setAccountBalance } from './account.service';

interface TransactionInfo {
    operation_id: number;
    date: string;
    ammount: number;
    is_income: boolean;
    sender_account_id: number;
    reciever_account_id: number;
    senderBalanceBefore: number;
    recieverBalanceBefore: number;
}

interface CreateTransaction {
    operation_id: number,
    date: string,
    ammount: number,
    is_income: boolean,
    balance_before: number,
    balance_after: number,
    account_id: number,
}


export class TransactionService {

    constructor() { }

    public async create(transaction: any) {

        try {
            const newTransaction = await Transaction.create(transaction)
            await setAccountBalance(newTransaction.account_id, newTransaction.balance_after)
            return

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    public async transfer(transactionInfo: TransactionInfo) {

        try {
            const sender: CreateTransaction = {
                operation_id: transactionInfo.operation_id,
                date: transactionInfo.date,
                ammount: transactionInfo.ammount,
                is_income: transactionInfo.is_income,
                balance_before: transactionInfo.senderBalanceBefore,
                balance_after: transactionInfo.senderBalanceBefore - transactionInfo.ammount,
                account_id: transactionInfo.sender_account_id
            }

            const reciever: CreateTransaction = {
                operation_id: transactionInfo.operation_id,
                date: transactionInfo.date,
                ammount: transactionInfo.ammount,
                is_income: !transactionInfo.is_income,
                balance_before: transactionInfo.recieverBalanceBefore,
                balance_after: transactionInfo.recieverBalanceBefore + transactionInfo.ammount,
                account_id: transactionInfo.reciever_account_id
            }

            await this.create(sender);
            await this.create(reciever);
            return

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

    public async getByUserID(user_id: number) {
        try {

            const transactions = await Transaction.findAll({
                where: {
                    '$Account.user_id$': user_id
                },
                include: {
                    model: Account,
                },
                order: ['date', 'DESC'], group: 'date'
            })

            if (!transactions) throw new Error('User has not transactions')

            return transactions;

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    public async getByOperationID(operation_id: string) {
        try {

            const transactions = await Transaction.findAll({ where: { operation_id } })

            if (!transactions) throw new Error('Operation has not transactions')

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