import Usuario from "../model/Usuario.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function login(req, res) {
    try {
        const { email, senha} = req.body;

        const usuario = await Usuario.findOne({ where: { email } });
        if (!usuario) {
            return res.status(401).json({ message: "E-mail ou senha errados." });
        }
        
        const senhaIgual = await bcrypt.compare(senha, usuario.senha);
        if (!senhaIgual) {
            return res.status(401).json({ message: "E-mail ou senha erradas." });
        }

        const token = jwt.sign(
            { id: usuario.id, nome: usuario.nome, email: usuario.email },
            process.env.JWT_SECRET,
            { expiresIn: '1d' } 
        );

        return res.status(200).json({
            message: "Login bem-sucedido!",
            token,
            usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao fazer Login." });
    }
}


export async function register(req, res) {
    try {
        const { nome, email, senha } = req.body;

        const existente = await Usuario.findOne({ where:{ email }});
        if (existente) {
            return res.status(400).json({ message: "Email já cadastrado." });
        }

        const salt = await bcrypt.genSalt(10);
        const senhaCriptografada = await bcrypt.hash(senha, salt);
        const novoUsuario = await Usuario.create({
            nome,
            email,
            senha: senhaCriptografada
        });

        return res.status(201).json({
            id: novoUsuario.id,
            nome: novoUsuario.nome,
            email: novoUsuario.email
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao registrar usuário."});
    }
}