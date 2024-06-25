import sequelize from "../config/connect.db.js";
import UserStatus from "../models/userStatus.model.js";
import Role from "../models/role.model.js";
import User from "../models/user.model.js";
import Restaurant from '../models/restaurant.model.js';
import Provider from '../models/provider.model.js';
import MenuItem from '../models/menu.model.js';


export const modelsApp = function initModels(select) {
    if (select) {
        UserStatus.hasMany(User, { foreignKey: { name: "userStatus_FK", field: "userStatus_FK", allowNull: true } });
        User.belongsTo(UserStatus, {
            foreignKey: { name: "userStatus_FK", field: "userStatus_FK", allowNull: true },
            constraints: true,
        })
        Role.hasMany(User, { foreignKey: { name: "role_FK", field: "role_FK", allowNull: true } });
        User.belongsTo(Role, {
            as: 'Current',
            foreignKey: { name: "role_FK", field: "role_FK", allowNull: true },
            constraints: true
        });
        Provider.hasMany(Restaurant, { foreignKey: {name: "provider_FK", field: "provider_FK", allowNull: true} });
        Restaurant.belongsTo(Provider, {
            foreignKey: {
                name: "provider_FK",
                field: "provider_FK",
                allowNull: true
            },
            constraints: true
        });

        MenuItem.hasMany(Restaurant, { foreignKey: { name: "menu_FK", field: "menu_FK", allowNull: true}});
        Restaurant.belongsTo(MenuItem, {
            foreignKey:  {
                name: "menu_FK",
                field: "menu_FK",
                allowNull: true
            },
            constraints: true
        });

        sequelize.sync();
    }
}