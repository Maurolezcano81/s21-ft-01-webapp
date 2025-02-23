import { Model, DataTypes, Sequelize } from "sequelize";

class Country extends Model {
    public country_id!: number;
    public name!: string;

    static initModel(sequelize: Sequelize) {
        Country.init(
            {
                country_id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            },
            {
                sequelize,
                tableName: "country",
            }
        );
    }
}

export default Country;
