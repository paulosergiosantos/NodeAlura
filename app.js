
const app = require('./config/express');
const httpServer = require('http').Server(app);
const io = require('socket.io')(httpServer);

app.set('io', io);

const HTTP_PORT = 3000;

httpServer.listen(HTTP_PORT, () => console.log(`Server running and listening on port ${HTTP_PORT}`));