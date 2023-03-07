import express, { Router } from 'express';
import { create, deleteById, getAll, getById, updateById } from '../controllers/student.controller';

const router: Router = express.Router();

// Lister tous les étudiants
router.get('/student', getAll);

// Créer un nouvel étudiant
router.post('/student', create);

// Obtenir un étudiant par son ID
router.get('/student/:id', getById);

// Mettre à jour un étudiant par son ID
router.put('/student/:id', updateById);

// Supprimer un étudiant par son ID
router.delete('/student/:id', deleteById);

export default router;