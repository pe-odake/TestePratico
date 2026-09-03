import Usuario from "./Usuario.js";
import Produto from "./Produto.js";

Usuario.hasMany(Produto, {
    foreignKey: 'usuario_id',
    as: 'produtos'
});

Produto.belongsTo(Usuario, {
    foreignKey: 'usuario_id',
    as: 'dono'
});

export { Usuario, Produto };