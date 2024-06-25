// restaurant.model.js

import sequelize from '../config/connect.db.js';
import { Model, DataTypes } from 'sequelize';
import MenuItem from '../models/menu.model.js';
import Provider from '../models/provider.model.js';

class Restaurant extends Model {}

Restaurant.init(
  {
    restaurant_id: {
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
    },
    restaurant_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    restaurant_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    menu_FK: {
      type: DataTypes.INTEGER,
      references: {
        model: MenuItem,
        key: 'menu_item_id'
      }
    },
    provider_FK: {
      type: DataTypes.INTEGER,
      references: {
        model: Provider,
        key: 'provider_id',
      }
    }
  },
  { sequelize, modelName: 'Restaurant' }
);

export default Restaurant;
