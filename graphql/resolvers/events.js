const Event = require("../../models/event");
const { transformEvent } = require("./merge");

module.exports = {
  //  GET request
  events: async () => {
    try {
      const events = await Event.find();

      return events.map((event) => {
        return transformEvent(event);
      });
    } catch (err) {
      throw err;
    }
  },

  //  POST request to create event
  createEvent: async (args) => {
    try {
      const event = new Event({
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: +args.eventInput.price,
        date: new Date(args.eventInput.date),
        creator: "5f5318de94b9fd641873102e",
      });
      let createdEvent;
      const result = await event.save();

      createdEvent = transformEvent(result);
      const creator = await User.findById("5f5318de94b9fd641873102e");

      if (!creator) {
        throw new Error("User not found");
      }

      creator.createdEvents.push(event);
      await creator.save();

      return createdEvent;
    } catch (err) {
      throw err;
    }
  },
};
