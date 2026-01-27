import express from 'express';
import { login, signup } from '../controllers/auth.controller.js';
import protect from '../middleware/auth.middleware.js';
import { authorizeRoles } from '../middleware/role.middleware.js';

const router = express.Router();

//signup route
router.post('/signup', signup);
router.post('/login', login);

router.get("/profile", protect, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user,
  });
});

router.get("/admin", protect, authorizeRoles("admin"), (req,res) =>{
     res.json({message: "Welcome Admin!",requestedBy: req.user});
})

export default router;