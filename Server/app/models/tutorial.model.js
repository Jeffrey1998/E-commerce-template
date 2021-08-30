module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
      name: {
        type: Sequelize.STRING
      },
      price: {
          type: Sequelize.FLOAT
      },
      description: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      catagory: {
          type: Sequelize.STRING
      }

    });
    return Product;
};