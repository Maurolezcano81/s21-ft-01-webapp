import { Transaction } from "sequelize";
import sequelize from "../../data/db";
import Account from "../../data/models/account.model";
import AccountType from "../../data/models/accountType.model";

export const registerAccount = async (userId: number) => {


  const transaction: Transaction = await sequelize.transaction();
  try {

    // Buscar el usuario y si no existe agregar un error
    // Buscar el tipo de cuenta "corriente"
    const accountType = await AccountType.findOne({
      where: { name: "corriente" },
    });

    if (!accountType) {
      throw new Error("Tipo de cuenta 'corriente' no encontrado");
    }

    // Crear la cuenta bancaria
    const account = await Account.create(
      {
        user_id: userId,
        account_type_id: accountType.account_type_id,
      },
      { transaction }
    );

    await transaction.commit();
    return account;
  } catch (error) {
    await transaction.rollback();
    throw new Error(`Error al crear la cuenta: ${(error as Error).message}`);
  }
}

export const getAccountBalance = async (account_id: string) => {

  try {
    const account = await Account.findByPk(account_id);

    if (!account) throw new Error('Account not found')

    return account.balance;

  } catch (error) {
    throw new Error(`Internal server error: ${error}`)
  }

}

export const setAccountBalance = async (account_id: number, balance: number) => {

  try {
    const account = await Account.findByPk(account_id);

    if (!account) throw new Error('Account not found')

    account.balance = balance;

    account.save()

    return

  } catch (error) {
    throw new Error(`Internal server error: ${error}`)
  }

}

