const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to My Awesome App!');
});

app.post('/users', async (req, res) => {
  try {
    const user = await db.Usuario.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/users', async (req, res) => {
  const users = await db.Usuario.findAll();
  res.json(users);
});

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
}).catch((err) => {
  console.error('Erro ao sincronizar banco de dados:', err);
});
