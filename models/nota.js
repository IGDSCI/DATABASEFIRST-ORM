// nota.js
module.exports = (sequelize, DataTypes) => {
    const Nota = sequelize.define('Nota', {
      id_nota: {
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
      id_avaliacao: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Avaliacoes',
          key: 'id_avaliacao'
        }
      },
      nota: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
      }
    });
  
    Nota.associate = function(models) {
      Nota.belongsTo(models.Usuario, {
        foreignKey: 'id_usuario',
        as: 'usuario'
      });
      Nota.belongsTo(models.Avaliacao, {
        foreignKey: 'id_avaliacao',
        as: 'avaliacao'
      });
    };
  
    return Nota;
  };
  