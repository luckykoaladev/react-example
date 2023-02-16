const Type = require('../models/type')
const {Model} = require('objection')
const furnitureTypes = [
    { name: "Sofa" },
    { name: "Dining table" },
    { name: "Armchair" },
    { name: "Bookshelf" },
    { name: "Bed frame" },
    { name: "Coffee table" },
    { name: "Dresser" },
    { name: "Desk" },
    { name: "Ottoman" },
    { name: "Cabinet" }
];

exports.seed = async function (knex) {
    Model.knex(knex);



    await Type.query().insert(furnitureTypes)
};
