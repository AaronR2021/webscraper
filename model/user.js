//created model i.e the table 
const {Sequelize, DataTypes } = require('@sequelize/core');
const db = require('../config/database');//defination of your orm

const Meme = db.define('Meme', {//use db to create your table=> User is the table name.
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    url:{
        type: DataTypes.STRING,
    },
    tags: {
        type: Sequelize.STRING,
        allowNull: false,
        get() {
            return this.getDataValue('tags').split(';')
        },
        set(val) {
           this.setDataValue('tags',val.split(' ').join(';'));
        },
    }
},{
    timestamps: false,
    freezeTableName:true,//duplicates table in changed later*
    underscored:true,            
});




db.sync({drop:true})
.then((data)=>{
    console.log('synced')})
.catch((err)=>{console.log('error syncing',err)})

module.exports = Meme;

