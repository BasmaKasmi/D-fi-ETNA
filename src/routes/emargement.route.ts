import express, { Router } from 'express';
import { create, deleteById, getAll, getById, updateById } from '../controllers/emargement.controller';

const router: Router = express.Router();

// Lister tous les étudiants
router.get('/emargement', getAll);

// Créer un nouvel étudiant
router.post('/emargement', create);

// Obtenir un étudiant par son ID
router.get('/emargement/:id', getById);

// Mettre à jour un étudiant par son ID
router.put('/emargement/:id', updateById);

// Supprimer un étudiant par son ID
router.delete('/emargement/:id', deleteById);

export default router;