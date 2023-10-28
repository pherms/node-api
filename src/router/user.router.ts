import express from "express";
import { createUser, getAllUsers, getUserByEmail, updateUserById, deleteUserById } from "../controllers/user.controller";

const router = express.Router();

router.post('/', createUser);
router.get('/', getAllUsers);
router.get('/:emailAddress', getUserByEmail);
router.put('/:id', updateUserById);
router.delete('/:id', deleteUserById);

export default router;
