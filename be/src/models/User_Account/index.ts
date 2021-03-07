module.exports = (sequelize: any, DataTypes: any) => {
    return sequelize.define('user', {
     userId: {
         allowNull: false,
         primaryKey: true,
         type: DataTypes.STRING
     },
     accountId: {
         allowNull: false,
         primaryKey: true,
         type: DataTypes.INTEGER
     }
    });
  };
  