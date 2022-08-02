// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// Categories have many Products
// Products belongToMany Tags (through ProductTag)
// Tags belongToMany Products (through ProductTag)
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'cascade',
});
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'cascade',
});

Tag.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'cascade',
});
Category.hasMany(Tag, {
  foreignKey: 'category_id',
  onDelete: 'cascade',
});

Product.belongsToMany(Tag, {through: ProductTag,foreignKey: 'product_id'})
Tag.belongsToMany(Product, {through: ProductTag, foreignKey: 'tag_id'})


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
