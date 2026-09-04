import { useState, useEffect } from 'react';
import '../styles/components/ModalProduto.css';
import { cadastrarProduto, atualizarProduto } from '../service/produtos.js';

function ModalProduto({ isOpen, onClose, produto, onSalvar }) {

    const [formData, setFormData] = useState({
        nome: '',
        descricao: '',
        quantidade: '',
        valor: ''
    });
    useEffect(() => {
        if (produto) {
            setFormData({
                nome: produto.nome || '',
                descricao: produto.descricao || '',
                quantidade: produto.quantidade ?? '',
                valor: produto.valor ?? ''
            });
        } else {
            setFormData({
                nome: '',
                descricao: '',
                quantidade: '',
                valor: ''
            });
        }
    }, [produto, isOpen]);
    if (!isOpen) return null;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const dados = {
            nome: formData.nome,
            descricao: formData.descricao,
            quantidade: parseInt(formData.quantidade, 10) || 0,
            valor: parseFloat(formData.valor) || 0
        };
        try {
            if (produto) {
                await atualizarProduto(produto.id, dados);
            } else {
                await cadastrarProduto(dados);
            }
            onSalvar(); 
            onClose();         
        } catch (error) {
            console.error('Erro ao salvar produto:', error);
        }
    };

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>

                <div className="modal-header">
                    <h2>{produto ? 'Editar' : 'Cadastrar Produto'}</h2>
                </div>

                <form onSubmit={handleSubmit} className="modal-form">
                    <div className="form-modal">
                        <label>Nome do Produto</label>
                        <input
                            type="text"
                            name="nome"
                            required
                            value={formData.nome}
                            onChange={handleChange}
                            placeholder="Ex: Mouse Gamer"
                        />
                    </div>

                    <div className="form-modal">
                        <label>Descrição</label>
                        <input
                            type="text"
                            name="descricao"
                            value={formData.descricao}
                            onChange={handleChange}
                            placeholder="Ex: Mouse sem fio 2400 DPI"
                        />
                    </div>

                    <div className="form-linha">
                        <div className="form-modal">
                            <label>Quantidade</label>
                            <input
                                type="number"
                                name="quantidade"
                                min="0"
                                required
                                value={formData.quantidade}
                                onChange={handleChange}
                                placeholder="0"
                            />
                        </div>

                        <div className="form-modal">
                            <label>Valor (R$)</label>
                            <input
                                type="number"
                                name="valor"
                                step="0.01"
                                min="0"
                                required
                                value={formData.valor}
                                onChange={handleChange}
                                placeholder="0.00"
                            />
                        </div>
                    </div>

                    <div className="modal-acoes">
                        <button type="button" className="btn-cancelar" onClick={onClose}>
                            Cancelar
                        </button>
                        <button type="submit" className="btn-salvar">
                            {produto ? 'Salvar Alterações' : 'Cadastrar'}
                        </button>
                    </div>
                </form>


            </div>
        </div>
    );
}

export default ModalProduto;