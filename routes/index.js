// const express = require("express");
import express from 'express';
// const test2 = require("controllers/crawlerController.mjs");

export const router = express.Router();

router.get('/hello', (req,res) => {
  // console.log('hello 요청 ', req.body);
  let dt = new Date();
  console.log(' newDate >>> ', dt);
  let temp = dt.toLocaleDateString();
  res.send(temp);
});
