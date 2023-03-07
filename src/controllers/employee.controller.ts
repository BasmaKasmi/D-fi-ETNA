import { Request, Response } from 'express';
import Employee from '../database/models/employee.model';
import { createEmployee, deleteEmployee, updateEmployee } from '../services/employee.service';

// getAll
export async function getAll(req: Request, res:{ send: (arg0: string) => Response; }) {
  const employee = await Employee.findAll();
  res.send(JSON.stringify(employee, null, 2));
}
// getbyId
export async function getById(req: Request, res:{ send: (arg0: string) => Response; }) {
  const { id } = req.params;
  const employee = await Employee.findAll({
    where: { id },
  });
  res.send(JSON.stringify(employee, null, 2));
}
// create
export async function create(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    await createEmployee(req, res);
  } catch (error) {
    res.send('Employee not create');
    console.log(error);
  }
}
// updateById
export async function updateById(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    await updateEmployee(req, res);
  } catch (error) {
    res.send('Employee has been updated');
  }
}

// delete
export async function deleteById(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    await deleteEmployee(req, res);
  } catch (error) {
    res.send('Employee not delete');
  }
}