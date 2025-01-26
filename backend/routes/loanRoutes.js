import express from 'express';
import { createLoan, getLoans } from '../controllers/loanController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Route to create a loan request
router.post('/', protect, createLoan);

// Route to get loans for the logged-in user
router.get('/', protect, getLoans);

export default router;
