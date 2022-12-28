// const express = require('express');
import express from 'express';
// const cors = require('cors');
import cors from 'cors';
// const router = require('./routes');
import { router } from './routes/index.js';

const app = express();
const PORT = 4000;

app.use(cors({
  origin: '*',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static('public'));
app.use('/api',router);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} 🚀`);
});
