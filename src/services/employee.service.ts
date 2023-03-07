import { Request, Response } from 'express';
import Employee from '../database/models/employee.model';
// createEmployee
export async function createEmployee(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    const employee = await Employee.create(req.body);
    res.send(JSON.stringify(employee, null, 2));
  } catch (error) {
    res.send('Employee not create');
    console.log(error);
  }
}
// updateEmployee
export async function updateEmployee(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    const { id } = req.params;
    await Employee.update(
      req.body,
      {
        where: { id },
      },
    ); const newemployee = await Employee.findByPk(id);
    res.send(JSON.stringify(newemployee, null, 2));
  } catch (error) {
    res.send('Employee has been updated');
  }
}

// deleteEmployee
export async function deleteEmployee(req: Request, res:{ send: (arg0: string) => Response; }) {
  try {
    const { id } = req.params;
    await Employee.destroy({
      where: { id },
    });
    res.send('200 OK');
  } catch (error) {
    res.send('Employee not delete');
  }
}