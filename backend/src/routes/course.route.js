import express from 'express';
import protect from '../middleware/auth.middleware';
import authorizeRoles from '../middleware/role.middleware.js';

const router = express.Router();

router.post('/',protect, authorizeRoles('instructor','admin'), createCourse);

export default router;