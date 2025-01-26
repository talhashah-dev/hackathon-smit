import asyncHandler from 'express-async-handler';
import Loan from '../models/Loan.js';

/**
 * @desc    Get all loan applications
 * @route   GET /api/admin/applications
 * @access  Admin
 */
export const getApplications = asyncHandler(async (req, res) => {
  const applications = await Loan.find({}).populate('user', 'name email');
  res.json(applications);
});

/**
 * @desc    Update loan application status
 * @route   PUT /api/admin/update-status
 * @access  Admin
 */
export const updateStatus = asyncHandler(async (req, res) => {
  const { applicationId, status } = req.body;

  const application = await Loan.findById(applicationId);

  if (application) {
    application.status = status;
    await application.save();
    res.json({ message: 'Application status updated successfully' });
  } else {
    res.status(404);
    throw new Error('Application not found');
  }
});
