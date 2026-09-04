import '../styles/pages/Home.css';
import Navbar from '../components/Navbar.jsx';
import Tabela from '../components/Tabela.jsx';
import ModalProduto from '../components/ModalProduto.jsx';
import ModalDelete from '../components/ModalDelete.jsx';
import { useState, useEffect } from 'react';
import { listarProdutos, detalharProduto } from '../service/produtos.js'

function Home() {

  const [produtos, setProdutos] = useState([]);
  const [modalProdutoAberto, setModalProdutoAberto] = useState(false);
  const [modalDeleteAberto, setModalDeleteAberto] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [idPesquisa, setIdPesquisa] = useState('');

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

  const handleBuscarProdId = async () => {
    if (!idPesquisa) {
      carregarProdutos();
      return;
    }
    try {
      const produto = await detalharProduto(idPesquisa);
      setProdutos([produto]);
    } catch (error) {
      console.error("Produto não existe", error);
    }
  };


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

          <div className="buscar-id">
            <input type="number" placeholder="Buscar por ID" value={idPesquisa} onChange={(e) => setIdPesquisa(e.target.value)} className="input-buscarid"/>
            <button type="button" onClick={handleBuscarProdId} className="btn-buscar-id">Buscar</button>
          </div>

          <button className="add-produto" onClick={handleCadastrar}>Cadastrar Produto</button>
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