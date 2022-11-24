const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Post extends Model {}
// created models based on user model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.INTEGER,
    },
    userid: {
      type:DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      }
    }
    
  },
  {
    sequelize,
    underscored: true,
    freezeTableName: true,
    modelName: "post",
    timestamps: false
  }
);

module.exports = Post;
