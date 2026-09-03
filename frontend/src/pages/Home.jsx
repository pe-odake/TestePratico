import '../styles/pages/Home.css';
import Navbar from '../components/Navbar.jsx';
import Tabela from '../components/Tabela.jsx';

function Home() {
  return (
    <div className="container">
      <Navbar/>

      <div className="home">

        <div className="banner">
          <div className="info-banner">
            <h1>CRUD de Produtos</h1>
          </div>
          <button className="add-produto">
            Cadastrar Produto
          </button>
        </div>

        <Tabela/>

      </div>

    </div>
  );
}

export default Home;