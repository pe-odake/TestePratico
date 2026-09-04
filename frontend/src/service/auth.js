import api from "./api";

export async function login(email, senha) {
    const response = await api.post("/auth/login", { email, senha });
    
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('usuario', JSON.stringify(response.data.usuario));
    return response.data;
}

export async function register(nome, email, senha) {
    const response = await api.post("/auth/register", { nome, email, senha });
    await login(email, senha);
    return response.data;
}

export function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
}

export function getUsuarioLogado() {
    const usuario = localStorage.getItem('usuario');
    return usuario ? JSON.parse(usuario) : null;
}

export function getToken() {
    return localStorage.getItem('token');
}