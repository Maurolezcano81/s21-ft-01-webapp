import { Model, DataTypes, Sequelize } from "sequelize";

class City extends Model {
    public city_id!: number;
    public name!: string;
    public country_id!: number;

    static initModel(sequelize: Sequelize) {
        City.init(
            {
                city_id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                country_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
            },
            {
                sequelize,
                tableName: "city",
            }
        );
    }
}

export default City;
