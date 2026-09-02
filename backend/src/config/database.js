import { Sequelize } from "sequelize";
import "dotenv/config";

const sequelize = new Sequelize(
    process.env.MYSQL_BD_NOME,
    process.env.MYSQL_BD_USER,
    process.env.MYSQL_BD_PASSWORD,
    {
        host: process.env.MYSQL_BD_HOST,
        port: process.env.MYSQL_BD_PORT,
        dialect: "mysql",
        logging: false
    }
);

export default sequelize;