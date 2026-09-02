import { Router } from "express";

import {
    listarProdutos, detalharProduto, // GET
    cadastrarProduto, // POST
    atualizarProduto, ativarProduto, // PUT/PATCH
    deletarProdutoHard, deletarProdutoSoft //DELETE
} from "../controller/produtoController.js";

const router = Router();
    router.get("/", listarProdutos);
    router.get("/:id", detalharProduto);
    router.post("/", cadastrarProduto);
    router.patch("/:id", atualizarProduto);
    router.delete("/hard/:id", deletarProdutoHard);
    router.delete("/soft/:id", deletarProdutoSoft);
    router.patch("/reativar/:id", ativarProduto);

export default router;