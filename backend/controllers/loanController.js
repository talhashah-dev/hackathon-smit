import asyncHandler from 'express-async-handler';
import Loan from '../models/Loan.js';

/**
 * @desc    Create a new loan request
 * @route   POST /api/loans
 * @access  Private
 */
export const createLoan = asyncHandler(async (req, res) => {
  const { category, subcategory, amount, period } = req.body;

  if (!category || !subcategory || !amount || !period) {
    res.status(400);
    throw new Error('All fields are required');
  }

  const loan = await Loan.create({
    user: req.user._id,
    category,
    subcategory,
    amount,
    period,
  });

  res.status(201).json(loan);
});

/**
 * @desc    Get loans for the logged-in user
 * @route   GET /api/loans
 * @access  Private
 */
export const getLoans = asyncHandler(async (req, res) => {
  const loans = await Loan.find({ user: req.user._id });
  res.json(loans);
});
