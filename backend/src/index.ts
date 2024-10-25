import http from 'http';
import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io';

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

io.on('connection', (socket) => {
  console.log('A socket connected', 'Socket Id: ', socket.id );
  socket.on('disconnect', () => {
    console.log('A socket disconnected', 'Socket Id: ', socket.id);
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});