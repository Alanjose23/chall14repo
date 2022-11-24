const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Comment extends Model {}
// created models based on user model
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // refernce the user id
    userid: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    // reference the post as primary id key
    postid: {
      type: DataTypes.INTEGER,
      references: {
        model: "comment",
        key: "id"
      }
    }
  },
  {
    sequelize,
    modelName: "comment",
    timestamps: true,
    underscored: true,
    freezeTableName: true
  }
);

module.exports = Comment;
