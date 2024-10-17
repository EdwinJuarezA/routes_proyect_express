const Sequelize = require('sequelize')

const sequelize = new Sequelize('mydrink','admin','MyDrink07_10',{
    host: 'mydrink-db.cn622ecw65bm.us-east-2.rds.amazonaws.com',
    dialect: 'mysql',
    port: 3306,
    define: {
        freezeTableName: true,  
      },
});


/*
async function testConnection() {
    sequelize.authenticate()
    .then(() => {
        console.log('Conectado')
    })
    .catch(err => {
        console.log('No se conecto', err)
    })
}

testConnection();*/

module.exports = sequelize;

