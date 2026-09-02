import app from "./app.js";
import sequelize from "./config/database.js";

const PORT = 3000;

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