import express from 'express'; 
import 'dotenv/config.js';
import './config/database.js'
import cors from 'cors';
import morgan from 'morgan';
import routerIndex from './router/index.js';


const server = express(); 

const PORT = process.env.PORT || 6060;

const ready = () => console.log(`Server is running on port: ${PORT}`);

//  configure server settings:
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());
server.use(morgan('dev'));

//  configure routes:
server.use('/api',routerIndex);

server.listen(PORT, ready);