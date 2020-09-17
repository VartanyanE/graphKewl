const Compliment = require("../../models/compliment");

const Booking = require("../../models/booking");

const { transformBooking, transformCompliment } = require("./merge");

module.exports = {
  //  GET request

  bookings: async (args, req) => {
    try {
      if (!req.isAuth) {
        throw new Error('Unauthenticated');
      }
      const bookings = await Booking.find();
      return bookings.map((booking) => {
        return transformBooking(booking);
      });
    } catch (err) {
      throw err;
    }
  },


  bookEvent: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('Unauthenticated');
    }
    const fetchedEvent = await Compliment.findOne({ _id: args.eventId });
    const booking = new Booking({
      user: req.userId,
      compliment: fetchedEvent,
    });

    const result = await booking.save();
    return transformBooking(result);
  },
  cancelBooking: async (args, req) => {
    try {
      if (!req.isAuth) {
        throw new Error('Unauthenticated');
      }
      const booking = await Booking.findById(args.bookingId).populate("compliment");
      const compliment = transformCompliment(booking.compliments);
      console.log(booking);

      await Booking.deleteOne({ _id: args.bookingId });
      return compliment;
    } catch (err) {
      throw err;
    }
  },
};
