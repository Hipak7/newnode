const Sequelize = require('sequelize');

const sequelize = new Sequelize('node', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    logging: false
  });

// var PromiseVal = new Promise(function(resolve,reject){
// setTimeout(function (){
// resolve(10);
// },3000)
// });

// console.log(PromiseVal)
sequelize.authenticate()
.then(function(result){
   
})
.catch(function(err){
    console.log(err)
})

module.exports = {
    Sequelize, sequelize
}
