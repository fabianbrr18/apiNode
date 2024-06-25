// provider.model.js

import sequelize from '../config/connect.db.js';
import { Model, DataTypes } from 'sequelize';

class Provider extends Model {}

Provider.init(
  {
    provider_id: {
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
    },
    provider_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    provider_contact_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { sequelize, modelName: 'Provider' }
);

export default Provider;
