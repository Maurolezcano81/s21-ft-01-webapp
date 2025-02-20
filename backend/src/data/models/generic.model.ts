//sequelize model
import { Sequelize } from "sequelize";
import AccountType from "./accountType.model";
import Account from "./account.model";

export const initModels = (sequelize: Sequelize) => {
  AccountType.initModel(sequelize);
  Account.initModel(sequelize);

  // Definir relaciones
  Account.belongsTo(AccountType, { foreignKey: "account_type_id" });
  AccountType.hasMany(Account, { foreignKey: "account_type_id" });
};
