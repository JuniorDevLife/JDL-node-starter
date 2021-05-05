import {Sequelize} from "sequelize-cockroachdb";
import {sequelize} from "../index.js";

const DataTypes = Sequelize.DataTypes;

export const CourseModel = sequelize.define("courses", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    topic: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
)