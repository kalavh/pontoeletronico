const Sequelize = require('sequelize')
const sequelize = require('../../config/database')

const marks = sequelize.define('marks', {
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  marks:{
       type: Sequelize.INTEGER,
  },
  cpf:{
    type: Sequelize.STRING,
  },
  createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
    }

},

{ tableName: 'user_marks' } )

marks.sync()
module.exports = marks


