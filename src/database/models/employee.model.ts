import { DataTypes } from "sequelize";
import DatabaseSquelize from "../instance";
import Emargement from "./emargement.model";
import Student from "./student.model";

const Employee = DatabaseSquelize.define("Employee", {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: 'null',
    },
    full_name : {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'null',
    },
    username : {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'null',
    },
    password :{
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'null',
    },
    status :{
        type: DataTypes.ENUM('connecté', 'déconnecté'),
        allowNull: false,
        comment: 'null',
    }
}, {
    tableName: 'Employee',
    charset: 'utf8',
    collate: 'utf8_general_ci',
    timestamps: false,
});
export default Employee;