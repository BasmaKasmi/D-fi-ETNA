import express, { Router } from 'express';
import { create, deleteById, getAll, getById, updateById } from '../controllers/employee.controller';

const router: Router = express.Router();

// Lister tous les étudiants
router.get('/employee', getAll);

// Créer un nouvel étudiant
router.post('/employee', create);

// Obtenir un étudiant par son ID
router.get('/employee/:id', getById);

// Mettre à jour un étudiant par son ID
router.put('/employee/:id', updateById);

// Supprimer un étudiant par son ID
router.delete('/employee/:id', deleteById);

export default router;