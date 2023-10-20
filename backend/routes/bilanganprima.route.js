import express from 'express';
import { bilanganprima } from '../controllers/bilanganprima.controller.js';

const router = express.Router();

router.post('/bilanganprima', bilanganprima);

export default router;
