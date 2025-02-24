import { envs } from "./config/envs";
import sequelize from "./data/db";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";


(async () => {
  main();
})()


async function main() {

  //DB connection here

  try {
    // Conectar a la base de datos
    await sequelize.sync({alter: true});
    console.log('Conexión exitosa a la base de datos con Sequelize');
    // Iniciar el servidor
    const server = new Server({
      port: envs.PORT,
      routes: AppRoutes.routes,
    });

    server.start();
  } catch (err) {
    console.error('Error al conectar con Sequelize:', err);
  }

}