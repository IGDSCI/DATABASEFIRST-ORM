// feedback.js
module.exports = (sequelize, DataTypes) => {
    const Feedback = sequelize.define('Feedback', {
      id_feedback: {
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
      id_aula: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Aulas',
          key: 'id_aula'
        }
      },
      opiniao: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      data_envio: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    });
  
    Feedback.associate = function(models) {
      Feedback.belongsTo(models.Usuario, {
        foreignKey: 'id_usuario',
        as: 'usuario'
      });
      Feedback.belongsTo(models.Aula, {
        foreignKey: 'id_aula',
        as: 'aula'
      });
    };
  
    return Feedback;
  };
  