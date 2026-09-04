import { Produto, Usuario } from "../model/index.js"; 

// GET
export async function listarProdutos(req, res) { 
    try {
        const produtos = await Produto.findAll({
            include: [
                {
                    model: Usuario, // TRAZER O OBJETO EM VEZ DO ID
                    as: 'usuario', 
                    attributes: { exclude: ['senha'] } // NÃO TRAZER NA RESPOSTA A SENHA
                }
            ]
        });

        return res.status(200).json(produtos);
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Erro ao buscar produtos."
        });
    }
}

// GET/id
export async function detalharProduto(req, res) {
    try {
        const { id } = req.params;

        const produto = await Produto.findByPk(id, {
            include: [
                {
                    model: Usuario, // TRAZER O OBJETO EM VEZ DO ID DE NOVO PARA 1 RESPOSTA
                    as: 'usuario', 
                    attributes: { exclude: ['senha'] } // NÃO TRAZER NA RESPOSTA A SENHA
                }
            ]
        });

        if (!produto) {
            return res.status(404).json({
                message: "Produto não encontrado."
            });
        }

        return res.status(200).json(produto);
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Erro ao buscar produto."
        });
    }
}

// POST
export async function cadastrarProduto(req, res) {
    try {
        const {
            dataCadastro,
            nome,
            descricao,
            quantidade,
            valor
        } = req.body;

        const usuario_logado = req.usuario.id;

        const produto = await Produto.create({
            dataCadastro,
            nome,
            descricao,
            quantidade,
            valor,
            usuario_id: usuario_logado
        });

        return res.status(201).json(produto);
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Erro ao cadastrar produto."
        });
    }
}

// PATCH
export async function atualizarProduto(req, res) {
    try {
        const { id } = req.params;

        const {
            dataCadastro,
            nome,
            descricao,
            quantidade,
            valor
        } = req.body;

        const produto = await Produto.findByPk(id);

        if (!produto) {
            return res.status(404).json({
                message: "Produto não encontrado."
            });
        }

        await produto.update({
            dataCadastro,
            nome,
            descricao,
            quantidade,
            valor
        });

        return res.status(200).json(produto);
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Erro ao atualizar produto."
        });
    }
}

// DELETE MESMO
export async function deletarProdutoHard(req, res) {
    try {
        const { id } = req.params;

        const produto = await Produto.findByPk(id);

        if (!produto) {
            return res.status(404).json({
                message: "Produto não encontrado."
            });
        }

        await produto.destroy();
        return res.status(204).send();
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Erro ao excluir produto."
        });
    }
}

// DELETE SOFT
export async function deletarProdutoSoft(req, res) {
    const { id } = req.params;
    const produto = await Produto.findByPk(id);

    if (!produto) {
        return res.status(404).json({
            message: "Produto não encontrado."
        });
    }
    produto.ativo = false;
    await produto.save();

    return res.status(200).json(produto);
}

// ROTA DE REATIVAR PRODUTOS INATIVOS
export async function ativarProduto(req, res) {
    const { id } = req.params;
    const produto = await Produto.findByPk(id);

    if (!produto) {
        return res.status(404).json({
            message: "Produto não encontrado."
        });
    }
    produto.ativo = true;
    await produto.save();

    return res.status(200).json(produto);
}