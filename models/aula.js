module.exports = (sequelize, DataTypes) => {
    const Aula = sequelize.define('Aula', {
      id_aula: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_modulo: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Modulos',
          key: 'id_modulo'
        }
      },
      titulo: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      descricao: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      arquivo_prova: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      data_publicacao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    });
    return Aula;
  };
  