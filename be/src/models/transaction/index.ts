module.exports = (sequelize: any, DataTypes: any) => {
  return sequelize.define('transaction', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    client: {
      type: DataTypes.STRING,
    },
    classification: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATE,
    },
    memo: {
      type: DataTypes.STRING,
    },
    excludeFromBudget: {
      type: DataTypes.BOOLEAN,
    },
    price: {
      type: DataTypes.DOUBLE,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
    },
  });
};
