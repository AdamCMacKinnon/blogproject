const express = require('express');
const router = express.Router();
const db = require('models/index.js');
router.use(express.json());
router.use(express.urlencoded({extended: false}));




