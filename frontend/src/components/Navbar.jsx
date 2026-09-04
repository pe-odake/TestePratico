import '../styles/components/Navbar.css';
import { useNavigate } from 'react-router-dom';
import { logout, getUsuarioLogado } from '../service/auth.js';

function Navbar() {

    const navigate = useNavigate();
    const usuario = getUsuarioLogado();
    const handleLogout = () => {
        logout();           
        navigate('/'); 
    };

    return (
        <div className="container-navbar">
            <nav>
                <button className="btn-logout" onClick={handleLogout}>Sair</button>
                <div className="info-container">
                    <div className="info-user">
                        <span className="nome-user">{usuario.nome}</span>
                        <span className="email-user">{usuario.email}</span>
                    </div>
                    <div className="icon-perfil">
                        <span className="icon">{usuario.nome.charAt(0).toUpperCase()}</span> {/* PEGAR A 1° LETRA */}
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default Navbar;