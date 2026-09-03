import api from "./api";

export async function listarProdutos() {
    const response = await api.get("/produtos");

    return response.data;
}

export async function detalharProduto(id) {
    const response = await api.get(`/produtos/${id}`);

    return response.data;
}

export async function cadastrarProduto(produto) {
    const response = await api.post("/produtos", produto);

    return response.data;
}

export async function atualizarProduto(id, produto) {
    const response = await api.put(`/produtos/${id}`, produto);

    return response.data;
}

export async function deletarProdutoHard(id) {
    await api.delete(`/produtos/${id}`);
}

export async function deletarProdutoSoft(id) {
    await api.delete(`/produtos/${id}`);
} 

export async function ativarProduto(id) {
    await api.patch(`/produtos/${id}`);
}
