import { Request, Response } from 'express';
import Emargement from '../database/models/emargement.model';
import { createEmargement, deleteEmargement, updateEmargement } from '../services/emargement.service';

// getAll
export async function getAll(req: Request, res:{ send: (arg0: string) => Response; }) {
  const emargement = await Emargement.findAll();
  res.send(JSON.stringify(emargement, null, 2));
}
// getbyId
export async function getById(req: Request, res:{ send: (arg0: string) => Response; }) {
  const { id } = req.params;
  const emargement = await Emargement.findAll({
    where: { id },
  });
  res.send(JSON.stringify(emargement, null, 2));
}
// create
export async function create(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    await createEmargement(req, res);
  } catch (error) {
    res.send('Emargement not create');
    console.log(error);
  }
}
// updateById
export async function updateById(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    await updateEmargement(req, res);
  } catch (error) {
    res.send('Emargement has been updated');
  }
}

// delete
export async function deleteById(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    await deleteEmargement(req, res);
  } catch (error) {
    res.send('Emargement not delete');
  }
}