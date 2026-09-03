import '../styles/components/Tabela.css';
import Delete from '../assets/delete.svg';
import Edit from '../assets/edit.svg';
import { useState, useEffect } from 'react';
import { listarProdutos } from '../service/produtos.js'

function Tabela() {

    const [ produtos, setProdutos ] = useState([]);

    useEffect(() => {
        async function carregarProdutos() {
          try {
            const response = await listarProdutos(); 
            setProdutos(response); 
          } catch (error) {
            console.error("Erro ao buscar produtos:", error);
          }
        }
        carregarProdutos();
      }, []);

    // FORMATADOR DE DATETIME E DINHEIRO

    const formatarDatetime = (datetime) => {
        return new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: 'America/Sao_Paulo' 
        }).format(new Date(datetime));
    };
            
    const formatarMoeda = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    return (
        <div className="container-tabela">
            <table>
                <thead className='cabecalho-table'>
                    <tr>
                        <th>ID</th>
                        <th>Data de Cadastro</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    { produtos.map((produto) => {
                        return (
                            <tr key={produto.id}>
                                <td>{produto.id}</td>
                                <td>{formatarDatetime(produto.dataCadastro)}</td>
                                <td>{produto.nome}</td>
                                <td>{produto.descricao}</td>
                                <td>{produto.quantidade}</td>
                                <td>{formatarMoeda.format(produto.valor)}</td>
                                <td>
                                    <div class="actions">
                                        <button type="button" aria-label="Editar"><img src={Edit} alt="Editar Produto" /></button>
                                        <button type="button" aria-label="Excluir"><img src={Delete} alt="Deletar Produto" /></button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                    
                </tbody>
            </table>
        </div>
    );
}


export default Tabela;