import express from 'express';
import { bilanganganjil } from '../controllers/bilanganganjil.controller.js';

const router = express.Router();

router.post('/bilanganganjil', bilanganganjil);

export default router;
