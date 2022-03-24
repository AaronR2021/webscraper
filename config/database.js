require('dotenv').config();

//database config
const { Sequelize } = require('sequelize');
//sequalize takes care of pg $ pg-hstore in the background..so dont worry.
const db = new Sequelize("d6clvlio90e79f","auptaegppwebjj","d65cd3340e32f874e22d372b44a673235ebc2a8a87c2b2db58e1802f820eb1f7",
 {                      //database name   =>  username    =>    password//
    host:"ec2-54-161-95-208.compute-1.amazonaws.com",
    dialect: 'postgres',//name of the engine
    port: 5432,
    pool: {  //collection of saved reusable connections
        max: 5, //never have more than 5 open connections
        min: 0, // t a minimum, have zero open connections/maintain no minimum number of connections
        acquire: 30000,
        idle: 10000//how long will sequalize hold the connection before terminating it>> 10seconds.
        //pool.timeout is how long if no response terminate connection
    },
    //got from stack overflow. but why?-->check it out!
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false // <<<<<<< YOU NEED THIS
        }
      },
    logging:false,
});

module.exports = db;