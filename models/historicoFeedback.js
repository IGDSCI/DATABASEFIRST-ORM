// historicoFeedback.js
module.exports = (sequelize, DataTypes) => {
    const HistoricoFeedback = sequelize.define('HistoricoFeedback', {
      id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'Usuarios',
          key: 'id_usuario'
        }
      },
      id_feedback: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'Feedbacks',
          key: 'id_feedback'
        }
      }
    });
  
    HistoricoFeedback.associate = function(models) {
      HistoricoFeedback.belongsTo(models.Usuario, {
        foreignKey: 'id_usuario',
        as: 'usuario'
      });
      HistoricoFeedback.belongsTo(models.Feedback, {
        foreignKey: 'id_feedback',
        as: 'feedback'
      });
    };
  
    return HistoricoFeedback;
  };
  