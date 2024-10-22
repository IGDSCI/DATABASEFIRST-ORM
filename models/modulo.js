module.exports = (sequelize, DataTypes) => {
    const Modulo = sequelize.define('Modulo', {
      id_modulo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      titulo: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      descricao: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    });
    return Modulo;
  };
  