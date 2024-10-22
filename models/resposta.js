module.exports = (sequelize, DataTypes) => {
    const Resposta = sequelize.define('Resposta', {
      id_resposta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id_usuario'
        }
      },
      id_exercicio: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Exercicios',
          key: 'id_exercicio'
        }
      },
      resposta: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      data_envio: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    });
    return Resposta;
  };
  