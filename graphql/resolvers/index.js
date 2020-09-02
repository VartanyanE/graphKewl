const Event = require("../../models/event");
const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const events = eventIds => {
    return Event.find({ _id: { $in: eventIds } }).then(events => {
        return events.map(event => {
            return { ...event._doc, _id: event.id, creator: user.bind(this, event.creator) }
        })
    })
}

const user = userId => {
    return User.findById(userId).then(user => {
        return { ...user._doc, _id: user.id, createdEvents: events.bind(this, user._doc.createdEvents) }
    }).catch(err => {
        throw err
    })
}

module.exports = {
    //  GET request
    events: () => {
        return Event.find()
            .then((events) => {
                return events.map((event) => {
                    return {
                        ...event._doc, _id: event.id, creator: {
                            ...event._doc.creator._doc,
                            _id: event._doc.creator.id
                        }
                    };
                });
            })
            .catch((err) => {
                throw err;
            });
    },

    //  POST request to create event
    createEvent: (args) => {
        const event = new Event({
            title: args.eventInput.title,
            description: args.eventInput.description,
            price: +args.eventInput.price,
            date: new Date(args.eventInput.date),
            creator: "5f4f3cfb1257b362843e2020",
        });
        let createdEvent;
        return event
            .save()
            .then((result) => {
                createdEvent = { ...result._doc, _id: result._doc._id.toString(), creator: user.bind(this, result._doc.creator) };
                return User.findById("5f4f3cfb1257b362843e2020");
            })
            .then((user) => {
                if (!user) {
                    throw new Error("User not found");
                }

                user.createdEvents.push(event);
                return user.save();
            })
            .then((result) => {
                return createdEvent;
            })
            .catch((err) => {
                console.log(err);
                throw err;
            });
    },
    //  POST request to create user
    createUser: (args) => {
        return User.findOne({ email: args.userInput.email })
            .then((user) => {
                if (user) {
                    throw new Error("User exists already");
                }
                return bcrypt.hash(args.userInput.password, 12);
            })
            .then((hashedPassword) => {
                const user = new User({
                    email: args.userInput.email,
                    password: hashedPassword,
                });
                return user.save();
            })
            .then((result) => {
                return { ...result._doc, password: null, _id: result.id };
            })
            .catch((err) => {
                throw err;
            });
    }
}