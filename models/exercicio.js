module.exports = (sequelize, DataTypes) => {
    const Exercicio = sequelize.define('Exercicio', {
      id_exercicio: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_aula: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Aulas',
          key: 'id_aula'
        }
      },
      descricao: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    });
    return Exercicio;
  };
  