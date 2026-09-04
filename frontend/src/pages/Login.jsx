import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../service/auth.js';
import '../styles/pages/Login.css';
import { Link } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await login(email, senha);
            navigate('/home');
        } catch (error) {
            console.error('Erro no Login', error);
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Login</h2>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="login-field">
                        <label>E-mail</label>
                        <input
                            type="email"
                            required
                            placeholder="Seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="login-field">
                        <label>Senha</label>
                        <input
                            type="password"
                            required
                            placeholder="Sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn-login">Entrar</button>
                </form>
                <div className="link-footer">
                    <p><Link to="/register" className="link">Registrar-se</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;