import '../styles/pages/Home.css';
import Navbar from '../components/Navbar.jsx';
import Tabela from '../components/Tabela.jsx';
import ModalProduto from '../components/ModalProduto.jsx';
import ModalDelete from '../components/ModalDelete.jsx';
import { useState, useEffect } from 'react';
import { listarProdutos } from '../service/produtos.js'

function Home() {

  const [produtos, setProdutos] = useState([]);
  const [modalProdutoAberto, setModalProdutoAberto] = useState(false);
  const [modalDeleteAberto, setModalDeleteAberto] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [produtoSelecionadoId, setProdutoSelecionadoId] = useState(null);

  const carregarProdutos = async () => {
    try {
      const response = await listarProdutos();
      setProdutos(response); 
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };
  
  useEffect(() => {
    carregarProdutos();
  }, []);

  const handleCadastrar = () => {
    setProdutoSelecionado(null);
    setModalProdutoAberto(true);
  };
  
  const handleEditar = (produto) => {
    setProdutoSelecionado(produto);
    setModalProdutoAberto(true);
  };

  const handleDeletar = (produto) => {
      setProdutoSelecionado(produto);
      setModalDeleteAberto(true);
  };

  return (
    <div className="container">
      <Navbar/>

      <div className="home">

        <div className="banner">
          <div className="info-banner">
            <h1>CRUD de Produtos</h1>
          </div>
          <button className="add-produto" onClick={handleCadastrar}>
            Cadastrar Produto
          </button>
        </div>

        <Tabela produtos={produtos} onEditar={handleEditar} onDeletar={handleDeletar}/>

        <ModalProduto
          isOpen={modalProdutoAberto}
          onClose={() => setModalProdutoAberto(false)}
          produto={produtoSelecionado}
          onSalvar={carregarProdutos}
        />

        <ModalDelete
          isOpen={modalDeleteAberto}
          onClose={() => setModalDeleteAberto(false)}
          produto={produtoSelecionado}
          onSalvar={carregarProdutos}
        />

      </div>

    </div>
  );
}

export default Home;