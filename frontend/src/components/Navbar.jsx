import '../styles/components/Navbar.css';

function Navbar() {
    return (
        <div className="container-navbar">
            <nav>
                <div className="info-container">
                    <div className="info-user">
                        <span className="nome-user">Teste</span>
                        <span className="email-user">teste@gmail.com</span>
                    </div>
                    <div className="icon-perfil">
                        <span className="icon">P</span>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default Navbar;