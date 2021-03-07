import { Sequelize } from 'sequelize';

// Need Type definition
interface SeqDb {
  sequelize?: any;
  Sequelize?: any;
  Account?: any;
  Category?: any;
  Method?: any;
  Transaction?: any;
  User?: any;
  User_Account?: any;
}

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

const db: SeqDb = {};

const sequelize: any = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

// Table Setting
db.Account = require('models/Account')(sequelize, Sequelize);
db.Category = require('models/Category')(sequelize, Sequelize);
db.Method = require('models/Method')(sequelize, Sequelize);
db.Transaction = require('models/Transaction')(sequelize, Sequelize);
db.User = require('models/User')(sequelize, Sequelize);
db.User_Account = require('models/User_Account')(sequelize,Sequelize);

// Relation Setting
// 1. User-Account (N:M)
db.User.belongsToMany(db.Account, { through: 'User_Account' });
db.Account.belongsToMany(db.User, { through: 'User_Account' });
db.User_Account.belongsTo(db.Account, { foreignKey: 'accountId'});
db.User_Account.belongsTo(db.User, { foreignKey: 'userId'});
// 2. Account-Category (1:N)
db.Account.hasMany(db.Category, { as: 'Categories' });
// 3. Account-Method (1:N)
db.Account.hasMany(db.Method, { as: 'Methods' });
// 4. Account-Transaction (1:N)
db.Account.hasMany(db.Transaction, { as: 'Transactions' });
// 5. Category-Transaction (1:N)
db.Category.hasMany(db.Transaction, { as: 'Transactions' });
// 6. Method-Transaction (1:N)
db.Method.hasMany(db.Transaction, { as: 'Transactions' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
