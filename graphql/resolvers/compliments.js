const Compliment = require("../../models/compliment");
const User = require("../../models/user");
const { transformCompliment } = require("./merge");

module.exports = {
  //  GET request
  compliments: async () => {
    try {
      const compliments = await Compliment.find();

      return compliments.map((compliment) => {
        return transformCompliment(compliment);
      });
    } catch (err) {
      throw err;
    }
  },

  //  POST request to create event
  createCompliment: async (args, req) => {
    try {
      // if (!req.isAuth) {
      //   throw new Error('Unauthenticated');
      // }
      const compliment = new Compliment({
        compliment: args.ComplimentInput.compliment,

        creator: req.userId,
      });
      let createdCompliment;
      const result = await compliment.save();

      createdCompliment = transformCompliment(result);
      const creator = await User.findById("5f5006ee9e715d74d24e4d8c");

      if (!creator) {
        throw new Error("User not found");
      }

      creator.createdCompliments.push(compliment);
      await creator.save();

      return createdCompliment;
    } catch (err) {
      throw err;
    }
  },
};
