module.exports = (sequelize: any, DataTypes: any) => {
  return sequelize.define('method', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    title: {
      type: DataTypes.STRING,
    },
  });
};
