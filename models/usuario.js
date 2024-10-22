module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false
    },
    senha: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    tipo: {
      type: DataTypes.ENUM('Aluno', 'Professor'),
      allowNull: false
    },
    data_cadastro: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    pontos: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });
  return Usuario;
};
