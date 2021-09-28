"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Posts", [
      {
        title: "Title post one",
        slug: "title-post-one",
        userId: 1,
        content: "Text content post one",
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {    
    return queryInterface.bulkDelete("Posts", null, {});
  },
};