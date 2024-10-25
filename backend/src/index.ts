import http from 'http';
import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io';
import passport from 'passport';
import { localStrategy } from './passport/Local';
import { googleStrategy } from './passport/google';
import { discordStrategy } from './passport/Discord';

const app = express();
app.use(cors());

passport.use(localStrategy);
passport.use(googleStrategy);
passport.use(discordStrategy);

app.use(passport.initialize());
app.use(passport.session());

const server = http.createServer(app);
const io = new Server(server, { 
  cors: {
    origin: '*' 
  } 
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

io.on('connection', (socket) => {
  console.log('A socket connected', 'Socket Id: ', socket.id );
  socket.on('disconnect', () => {
    console.log('A socket disconnected', 'Socket Id: ', socket.id);
  });

  socket.on('join', (room) => {
    console.log('A user joined the room', room);
    // socket.join(room);
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});