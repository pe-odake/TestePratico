import app from "./app.js";
import sequelize from "./config/database.js";
import "dotenv/config";

const PORT = process.env.PORT;

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log("Conectado Banco");

        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Erro ao iniciar servidor:", error);
    }
}

startServer();