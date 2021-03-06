"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primarykey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                allowNull: false
            }
        }
    }, {
        freezeTableName: true
    });
    User.sync({ force: true }).then(function () {
        return User.create({
            title: 'Getting Started with PostgreSQL and Sequelize',
            content: 'Hello there'
        });
    }).catch(function (err) {
        console.log(err);
    });
    return User;
}
exports.default = default_1;
