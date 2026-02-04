import express from 'express';

import { createCourse, submitCourse, updateCourse } from '../controllers/course.controller.js';
import protect from '../middleware/auth.middleware.js';
import { authorizeRoles } from '../middleware/role.middleware.js';

const router = express.Router();

router.post('/create-course',protect,authorizeRoles('instructor'), createCourse);
router.put('/update-course/:id',protect,authorizeRoles('instructor'), updateCourse);
router.post('/submit-course/:id',protect,authorizeRoles('instructor'), submitCourse);

export default router;