//sequelize initialize and associations 
import { Sequelize } from 'sequelize';
import { envs } from '../config/envs';

// Configuración de Sequelize con variables de entorno desde envs.ts
const sequelize = new Sequelize(
  envs.PGDATABASE,
  envs.PGUSER,
  envs.PGPASSWORD,
  {
    host: envs.PGHOST,
    port: envs.PGPORT,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Esto evita problemas con certificados SSL
      },
    },
  }
);



export default sequelize;
