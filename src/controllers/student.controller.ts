import { Request, Response } from 'express';
import Student from '../database/models/student.model';
import { createStudent, deleteStudent, updateStudent } from '../services/student.service';

// getAll
export async function getAll(req: Request, res:{ send: (arg0: string) => Response; }) {
  const student = await Student.findAll();
  res.send(JSON.stringify(student, null, 2));
}
// getbyId
export async function getById(req: Request, res:{ send: (arg0: string) => Response; }) {
  const { id } = req.params;
  const student = await Student.findAll({
    where: { id },
  });
  res.send(JSON.stringify(student, null, 2));
}
// create
export async function create(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    await createStudent(req, res);
  } catch (error) {
    res.send('Student not create');
    console.log(error);
  }
}
// updateById
export async function updateById(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    await updateStudent(req, res);
  } catch (error) {
    res.send('Student has been updated');
  }
}

// delete
export async function deleteById(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    await deleteStudent(req, res);
  } catch (error) {
    res.send('Student not delete');
  }
}