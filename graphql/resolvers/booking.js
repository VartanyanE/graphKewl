const Event = require("../../models/event");

const Booking = require("../../models/booking");

const { transformBooking, transformEvent } = require("./merge");

module.exports = {
  //  GET request

  bookings: async () => {
    try {
      const bookings = await Booking.find();
      return bookings.map((booking) => {
        return;
        transformBooking(booking);
      });
    } catch (err) {
      throw err;
    }
  },

  //  POST request to create event

  //  POST request to create user

  bookEvent: async (args) => {
    const fetchedEvent = await Event.findOne({ _id: args.eventId });
    const booking = new Booking({
      user: "5f5318de94b9fd641873102e",
      event: fetchedEvent,
    });

    const result = await booking.save();
    return;
    transformBooking(result);
  },
  cancelBooking: async (args) => {
    try {
      const booking = await Booking.findById(args.bookingId).populate("event");
      const event = transformEvent(booking.event);
      console.log(booking);

      await Booking.deleteOne({ _id: args.bookingId });
      return event;
    } catch (err) {
      throw err;
    }
  },
};
