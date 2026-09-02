import { Router } from "express";
import produtoRoute from "./produtoRoute.js";

const router = Router();
    router.use("/produtos", produtoRoute);
export default router;