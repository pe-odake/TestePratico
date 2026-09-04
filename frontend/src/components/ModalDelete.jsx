import { deletarProdutoSoft, deletarProdutoHard, ativarProduto } from '../service/produtos.js';
import '../styles/components/ModalDelete.css';

function ModalDelete({ isOpen, onClose, produto, onSalvar }) {
    if (!isOpen) return null;
    
    const handleHardDelete = async () => {
        try {
            await deletarProdutoHard(produto.id); 
            onSalvar(); 
            onClose();  
        } catch (error) {
            console.error('Erro ao deletar o produto (Hard):', error);
        }
    };
    const handleSoftDeleteOuReativar = async () => {
        try {
            if (produto.ativo) {
                await deletarProdutoSoft(produto.id);
            } else {
                await ativarProduto(produto.id);
            }
            onSalvar(); 
            onClose();  
        } catch (error) {
            console.error('Erro na operação:', error);
        }
    };

    return (
        <div className="modal-delete" onClick={onClose}>
            <div className="modal-delete-container" onClick={(e) => e.stopPropagation()}>
                <button type="button" className="btn-cancelar" onClick={onClose}>
                    Cancelar
                </button>
                <button type="button" id='btn-delete' className="btn-hard-delete" onClick={handleHardDelete}>
                    Hard Delete
                </button>
                <button type="button" className={produto.ativo ? "btn-soft-delete" : "btn-reativar"} onClick={handleSoftDeleteOuReativar}>
                    {produto.ativo ? 'Soft Delete' : 'Reativar'}
                </button>
            </div>
        </div>
    );
}

export default ModalDelete;