const Sequelize = require('sequelize');
const db = require('../index.js');

const Student = db.define('student', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
})

module.exports = Student;
