export default function(sequelize, DataTypes) {
    
    const User = sequelize.define('User', {
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
    },{
        freezeTableName: true
    });
    
    User.sync({force: true}).then(function () {
        return User.create({
          title: 'Getting Started with PostgreSQL and Sequelize',
          content: 'Hello there'
        });
    }).catch((err) => {
      console.log(err);
    });

    return User;
}