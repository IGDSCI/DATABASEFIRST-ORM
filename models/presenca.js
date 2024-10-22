// presenca.js
module.exports = (sequelize, DataTypes) => {
    const Presenca = sequelize.define('Presenca', {
      id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'Usuarios',
          key: 'id_usuario'
        }
      },
      id_aula: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'Aulas',
          key: 'id_aula'
        }
      },
      presente: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    });
  
    Presenca.associate = function(models) {
      Presenca.belongsTo(models.Usuario, {
        foreignKey: 'id_usuario',
        as: 'usuario'
      });
      Presenca.belongsTo(models.Aula, {
        foreignKey: 'id_aula',
        as: 'aula'
      });
    };
  
    return Presenca;
  };
  