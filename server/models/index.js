const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();
console.log(' DB_USER:', process.env.DB_USER);
console.log(' DB_PASSWORD:', process.env.DB_PASSWORD);
console.log(' DB_NAME:', process.env.DB_NAME);
console.log(' DB_HOST:', process.env.DB_HOST);
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.User = require('./user.model')(sequelize, Sequelize);
db.Task = require('./task.model')(sequelize, Sequelize);
db.TimeEntry = require('./timeEntry.model')(sequelize, Sequelize);


db.User.hasMany(db.Task, { onDelete: 'CASCADE' });
db.Task.belongsTo(db.User);

db.Task.hasMany(db.TimeEntry, { onDelete: 'CASCADE' });
db.TimeEntry.belongsTo(db.Task);


db.sequelize.sync({ alter: true }) 
  .then(() => {
    console.log('✅ Database synced');
  })
  .catch((err) => {
    console.error('❌ DB sync failed:', err);
  });

module.exports = db;
