import Emargement from './models/emargement.model';
import Employee from './models/employee.model';
import Student from './models/student.model';
import sequelize from './instance';

// async function connect() {
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error: any) => {
    console.error('Unable to connect to the database:', error);
  });
async function migrate() {
  try {
    await Student.sync({ alter: true });
    console.log('The table for the User model was just (re)created!');

    await Emargement.sync({ alter: true });
    console.log('The table for the User model was just (re)created!');

    await Employee.sync({ alter: true });
    console.log('The table for the User model was just (re)created!');

  } catch (error) {
    console.log(error);
  }
}

migrate();
