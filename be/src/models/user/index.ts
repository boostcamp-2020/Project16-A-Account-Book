module.exports = (sequelize: any, DataTypes: any) => {
  return sequelize.define('user', {
    id: {
      allowNull: false,
      unique: true,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    salt: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    nickName: {
      type: DataTypes.STRING,
    },
    profileURL: {
      type: DataTypes.STRING,
    },
    startOfWeek: {
      type: DataTypes.STRING,
    },
    timezone: {
      type: DataTypes.STRING,
    },
  });
};
