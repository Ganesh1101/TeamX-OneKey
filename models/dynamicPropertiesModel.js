const  Datatypes = require('sequelize')
const sequelize = require('../config/db');
const Product = require('./productModel');
const DynamicProperties=sequelize.define({
    name:{
        type:Datatypes.STRING,
        allowNull:false,
    },
    value_type: {
        type: DataTypes.ENUM('STRING', 'CHAR', 'TEXT', 'INTEGER', 'BIGINT', 'FLOAT', 'DOUBLE', 'DECIMAL', 'BOOLEAN', 'DATE', 'DATEONLY', 'TIME', 'DATEONLY', 'ENUM', 'JSON', 'JSONB', 'ARRAY'),
        allowNull: false
    },
    value: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    product_id:{
        type:Datatypes.INTEGER,
        allowNull: false,
        references: {
          model: Product,
          key: 'product_id'
        }
    },
   
});
const create=async ()=>{
    await DynamicProperties.sync({force:true})
    console.log('Dynamic Properties table created')
}
create();
module.exports=DynamicProperties