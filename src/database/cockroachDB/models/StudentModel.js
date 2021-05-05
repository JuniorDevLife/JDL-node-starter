import {Sequelize} from "sequelize-cockroachdb";


const DataTypes = Sequelize.DataTypes;

export const StudentModel = (sequelize)=> {
 const Student =  sequelize.define("students", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    }
  )

  return Student
}

// check