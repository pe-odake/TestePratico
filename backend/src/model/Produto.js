import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Produto = sequelize.define(
    "Produto",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dataCadastro: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        nome: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        quantidade: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        valor: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        ativo: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    },
    {
        tableName: "Produto",
        timestamps: false
    }
);

export default Produto;