import express from "express"
import { getApplications, updateStatus } from '../controllers/adminController.js';
const router = express.Router();

router.get('/applications', getApplications);
router.put('/update-status', updateStatus);

export default router
