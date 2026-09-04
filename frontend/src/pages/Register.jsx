import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../service/auth.js';
import '../styles/pages/Register.css';
import { Link } from 'react-router-dom';

function Register() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            await register(nome, email, senha);
            navigate('/home');
        } catch (error) {
            console.error('Erro ao registrar-se.');
        }
    };

    return (
        <div className="register-page">
            <div className="register-container">
                <h2>Cadastro de Usuário</h2>

                <form onSubmit={handleSubmit} className="register-form">
                    <div className="form-register">
                        <label>Nome</label>
                        <input type="text" required placeholder="seu nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                    </div>
                    <div className="form-register">
                        <label>E-mail</label>
                        <input type="email" required placeholder="seu email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-register">
                        <label>Senha</label>
                        <input type="password" required placeholder="Sua senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn-register">Registrar-se</button>
                </form>
                <div className="link-footer">
                    <p><Link to="/" className="link">Login</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Register;