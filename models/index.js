const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Usuario = require('./usuario')(sequelize, DataTypes);
db.Modulo = require('./modulo')(sequelize, DataTypes);
db.Aula = require('./aula')(sequelize, DataTypes);
db.Exercicio = require('./exercicio')(sequelize, DataTypes);
db.Avaliacao = require('./avaliacao')(sequelize, DataTypes);
db.Resposta = require('./resposta')(sequelize, DataTypes);
db.Feedback = require('./feedback')(sequelize, DataTypes);
db.Relatorio = require('./relatorio')(sequelize, DataTypes);
db.Nota = require('./nota')(sequelize, DataTypes);
db.Ranking = require('./ranking')(sequelize, DataTypes);
db.HistoricoFeedback = require('./historicoFeedback')(sequelize, DataTypes);
db.Presenca = require('./presenca')(sequelize, DataTypes);

module.exports = db;
