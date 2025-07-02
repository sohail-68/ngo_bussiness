const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const Menu = require('./Menu');

const Page = sequelize.define('Page', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // slug: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  //   unique: true
  // },
  content: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: {}
  },
   seo: {
    type: DataTypes.JSON,
    defaultValue: {
      metaTitle: '',
      metaDescription: '',
      keywords: ''
    }
  },
   imageUrl: {
    type: DataTypes.STRING
  },
  menuId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Menus',
      key: 'id'
    }
  },
  createdBy: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('draft', 'published'),
    defaultValue: 'draft'
  }
}, {
  timestamps: true,
  paranoid: true // Soft delete
});

Page.belongsTo(User, { foreignKey: 'createdBy' });
Page.belongsTo(Menu, { foreignKey: 'menuId' });

module.exports = Page;