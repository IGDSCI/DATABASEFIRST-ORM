// ranking.js
module.exports = (sequelize, DataTypes) => {
    const Ranking = sequelize.define('Ranking', {
      id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'Usuarios',
          key: 'id_usuario'
        }
      },
      posicao: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      pontos: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  
    Ranking.associate = function(models) {
      Ranking.belongsTo(models.Usuario, {
        foreignKey: 'id_usuario',
        as: 'usuario'
      });
    };
  
    return Ranking;
  };
  