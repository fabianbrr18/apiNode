// menuItem.model.js

import sequelize from '../config/connect.db.js';
import { Model, DataTypes } from 'sequelize';

class MenuItem extends Model {}

MenuItem.init(
  {
    menu_item_id: {
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
    },
    menu_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    menu_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  { sequelize, modelName: 'MenuItem' }
);

export default MenuItem;
