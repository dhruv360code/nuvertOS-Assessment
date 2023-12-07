const app = require("./app");
const http = require("http");
const sequelize = require("./db/connection");

const PORT = 3000;

const server = http.createServer(app);
sequelize.sync()
  .then(() => {
    console.log('Database and table have been synced');
    server.listen(PORT, async () => {
      console.log(`Express server listening on port ${PORT}`);
    });
    
  })
  .catch((error) => {
    console.error('Error syncing the database:', error.message, error);
  });

