//sequelize model
import { Sequelize } from "sequelize";
import AccountType from "./accountType.model";
import Account from "./account.model";
import User from "./user.model";
import City from "./city.model";
import Country from "./country.model";
import { OTP } from "./OTP.model";

export const initModels = (sequelize: Sequelize) => {
  AccountType.initModel(sequelize);
  Account.initModel(sequelize);
  Country.initModel(sequelize);
  City.initModel(sequelize);
  User.initModel(sequelize);
  OTP.initModel(sequelize);

  // Definir relaciones
  Account.belongsTo(AccountType, { foreignKey: "account_type_id" });
  AccountType.hasMany(Account, { foreignKey: "account_type_id" });

  City.belongsTo(Country, { foreignKey: "country_id" });
  Country.hasMany(City, { foreignKey: "country_id" });

  User.belongsTo(City, { foreignKey: "city_id" });
  City.hasMany(User, { foreignKey: "city_id" });


};
