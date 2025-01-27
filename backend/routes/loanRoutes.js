import express from 'express';
import { createLoan, getLoans } from '../controllers/loanController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();


router.post('/', protect, createLoan);

router.get('/', protect, getLoans);

export default router;
