import { Model, DataTypes, Sequelize } from "sequelize";

class AccountType extends Model {
  public account_type_id!: number;
  public name!: string;

  static initModel(sequelize: Sequelize) {
    AccountType.init(
      {
        account_type_id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
      },
      {
        sequelize,
        tableName: "account_type",
      }
    );
  }
}

export default AccountType;
