import { Request, Response } from 'express';
import Student from '../database/models/student.model';
// createStudent
export async function createStudent(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    const student = await Student.create(req.body);
    res.send(JSON.stringify(student, null, 2));
  } catch (error) {
    res.send('Student not create');
    console.log(error);
  }
}
// updateStudent
export async function updateStudent(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    const { id } = req.params;
    await Student.update(
      req.body,
      {
        where: { id },
      },
    ); const newstudent = await Student.findByPk(id);
    res.send(JSON.stringify(newstudent, null, 2));
  } catch (error) {
    res.send('Student has been updated');
  }
}

// deleteStudent
export async function deleteStudent(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    const { id } = req.params;
    await Student.destroy({
      where: { id },
    });
    res.send('200 OK');
  } catch (error) {
    res.send('Student not delete');
  }
}