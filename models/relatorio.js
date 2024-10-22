// relatorio.js
module.exports = (sequelize, DataTypes) => {
    const Relatorio = sequelize.define('Relatorio', {
      id_relatorio: {
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
      tipo: {
        type: DataTypes.ENUM('Prova', 'Exercicio', 'Pontuacao', 'Progresso'),
        allowNull: false
      },
      descricao: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      data_geracao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    });
  
    Relatorio.associate = function(models) {
      Relatorio.belongsTo(models.Usuario, {
        foreignKey: 'id_usuario',
        as: 'usuario'
      });
    };
  
    return Relatorio;
  };
  