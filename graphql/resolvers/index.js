const authResolver = require("./auth");
const complimentsResolver = require("./compliments");
const bookingResolver = require("./booking");

const rootResolver = {
  ...authResolver,
  ...complimentsResolver,
  ...bookingResolver,
};

module.exports = rootResolver;
