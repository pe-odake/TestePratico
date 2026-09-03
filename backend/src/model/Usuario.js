import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Usuario = sequelize.define(
    "Usuario",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },

        nome: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

        email: {
            type: DataTypes.STRING(200),
            allowNull: false,
            unique: true
        },

        senha: {
            type: DataTypes.STRING(256),
            allowNull: false
        }
    },
    {
        tableName: "Usuario",
        timestamps: false
    }
);

export default Usuario;