import { Router } from "express";
import produtoRoute from "./produtoRoute.js";
import usuarioRoute from "./usuarioRoute.js";

const router = Router();
    router.use("/produtos", produtoRoute);
    router.use("/auth", usuarioRoute);
export default router;