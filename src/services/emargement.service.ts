import { Request, Response } from 'express';
import Emargement from '../database/models/emargement.model';
// createEmargement
export async function createEmargement(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    const emargement = await Emargement.create(req.body);
    res.send(JSON.stringify(emargement, null, 2));
  } catch (error) {
    res.send('Emargement not create');
    console.log(error);
  }
}
// updateEmargement
export async function updateEmargement(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    const { id } = req.params;
    await Emargement.update(
      req.body,
      {
        where: { id },
      },
    ); const newemargement = await Emargement.findByPk(id);
    res.send(JSON.stringify(newemargement, null, 2));
  } catch (error) {
    res.send('Emargement has been updated');
  }
}

// deleteEmargement
export async function deleteEmargement(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    const { id } = req.params;
    await Emargement.destroy({
      where: { id },
    });
    res.send('200 OK');
  } catch (error) {
    res.send('Emargement not delete');
  }
}