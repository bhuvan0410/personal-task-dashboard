const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { sequelize } = require('./models');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/tasks', require('./routes/task.routes'));
app.use('/api/time', require('./routes/time.routes'));

app.get('/', (req, res) => res.send('Task Dashboard API Running'));

// Retry logic for DB connection
async function startServer() {
  const maxRetries = 5;
  let retries = 0;

  while (retries < maxRetries) {
    try {
      await sequelize.authenticate();
      console.log('✅ DB connected');
      await sequelize.sync();
      console.log('✅ Tables synced');

      app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
      });
      return; // Exit loop on success
    } catch (err) {
      console.error(`❌ DB connection failed (attempt ${retries + 1}). Retrying in 3s...`);
      retries++;
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
  }
 console.log("JWT_SECRET:", process.env.JWT_SECRET);

  console.error('❌ Could not connect to DB after multiple attempts. Exiting.');
  process.exit(1);
}

startServer();
