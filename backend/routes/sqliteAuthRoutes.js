import express from 'express';
import { sqliteLogin, sqliteRegister } from '../controllers/sqliteAuthController.js';

const router = express.Router();

router.post('/login', sqliteLogin);
router.post('/register', sqliteRegister);

export default router;
