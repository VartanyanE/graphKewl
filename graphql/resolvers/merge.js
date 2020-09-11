const Compliment = require("../../models/compliment");
const User = require("../../models/user");

const compliments = async (eventIds) => {
  try {
    const compliments = await Compliment.find({ _id: { $in: eventIds } });
    return compliments.map((compliment) => {
      return transformCompliment(compliment);
    });
  } catch (err) {
    throw err;
  }
};

const user = async (userId) => {
  try {
    const user = await User.findById(userId);
    return {
      ...user._doc,
      _id: user.id,
      createdCompliments: compliments.bind(this, user._doc.createdCompliments),
    };
  } catch (err) {
    throw err;
  }
};

const singleCompliment = async (eventId) => {
  try {
    const compliment = await Compliment.findById(eventId);

    return transformCompliment(compliment);
  } catch (err) {
    throw err;
  }
};

const transformBooking = (booking) => {
  return {
    ...booking._doc,
    _id: booking.id,
    user: user.bind(this, booking._doc.user),
    compliment: singleCompliment.bind(this, booking._doc.compliment),
    createdAt: new Date(booking._doc.createdAt).toISOString(),
    updatedAt: new Date(booking._doc.updatedAt).toISOString(),
  };
};

const transformCompliment = (compliment) => {
  return {
    ...compliment._doc,
    _id: compliment.id,

    creator: user.bind(this, compliment.creator),
  };
};

// exports.user = user;
// exports.events = events;
// exports.singleEvent = singleEvent;

exports.transformCompliment = transformCompliment;
exports.transformBooking = transformBooking;
