module.exports = (sequelize, DataTypes) => {
    const Avaliacao = sequelize.define('Avaliacao', {
      id_avaliacao: {
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
      descricao: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      data_publicacao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    });
    return Avaliacao;
  };
  