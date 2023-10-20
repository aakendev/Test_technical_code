import express from 'express';
import { segitigaangka } from '../controllers/segitigaangka.controller.js';

const router = express.Router();

router.post('/segitigaangka', segitigaangka);

export default router;
