import { Router } from "express";
import authMiddleware from "../config/security/authMiddleware.js";

import {
    listarProdutos, detalharProduto, // GET
    cadastrarProduto, // POST
    atualizarProduto, ativarProduto, // PUT/PATCH
    deletarProdutoHard, deletarProdutoSoft //DELETE
} from "../controller/produtoController.js";

const router = Router();
    router.get("/", authMiddleware, listarProdutos);
    router.get("/:id", authMiddleware, detalharProduto);
    router.post("/", authMiddleware, cadastrarProduto);
    router.patch("/:id", authMiddleware, atualizarProduto);
    router.delete("/hard/:id", authMiddleware, deletarProdutoHard);
    router.delete("/soft/:id", authMiddleware, deletarProdutoSoft);
    router.patch("/reativar/:id", authMiddleware, ativarProduto);

export default router;