import { DataTypes } from "sequelize";
import DatabaseSquelize from "../instance";
import Emargement from "./emargement.model";
import Employee from "./employee.model";

const Student = DatabaseSquelize.define("Student", {
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
    login : {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'null',
    },
    promo : {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'null',
    },
    student_qr : {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'null',
    },
    date_morning :{
        type: DataTypes.TIME,
        allowNull: true,
        comment: 'null',
    },
    date_evening :{
        type: DataTypes.TIME,
        allowNull: true,
        comment: 'null',
    },
    status :{
        type: DataTypes.ENUM('presentiel', 'distanciel', 'entreprise'),
        allowNull: false,
        comment: 'null',
    }
}, {
    tableName: 'Student',
    charset: 'utf8',
    collate: 'utf8_general_ci',
    timestamps: false,
});
export default Student;