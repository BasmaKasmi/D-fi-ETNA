import { DataTypes } from "sequelize";
import DatabaseSquelize from "../instance";
import Employee from "./employee.model";
import Student from "./student.model";

const Emargement = DatabaseSquelize.define("Emargement", {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: 'null',
    },
    date_morning :{
        type: DataTypes.DATE,
        allowNull: false,
        comment: 'null',
    },
    date_evening :{
        type: DataTypes.TIME,
        allowNull: true,
        comment: 'null',
    },
    status :{
        type: DataTypes.ENUM('confirmé', 'absent', 'retard'),
        allowNull: false,
        comment: 'null',
    },
    absence :{
        type: DataTypes.ENUM('justifié', 'non justifié'),
        allowNull: false,
        comment: 'null',
    },
    retard :{
        type: DataTypes.ENUM('justifié', 'non justifié'),
        allowNull: false,
        comment: 'null',
    }
}, {
    tableName: 'Emargement',
    charset: 'utf8',
    collate: 'utf8_general_ci',
    timestamps: false,
});

export default Emargement;

