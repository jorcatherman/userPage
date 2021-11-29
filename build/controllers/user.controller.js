"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = require("../models/user.model");
module.exports.list = (request, response) => {
    User.find({})
        .then(users => {
        response.json(users);
    })
        .catch(err => {
        response.status(400).json(err);
    });
};
module.exports.create = (request, response) => {
    const { first_name, last_name, email, avatar } = request.body;
    User.create({
        first_name,
        last_name,
        email,
        avatar
    })
        .then(user => {
        response.json(user);
    })
        .catch(err => {
        response.status(400).json(err);
    });
};
module.exports.detail = (request, response) => {
    const { id } = request.params;
    User.findOne({ _id: id })
        .then(user => {
        response.json(user);
    })
        .catch(err => {
        response.status(400).json(err);
    });
};
module.exports.update = (request, response) => {
    const { id } = request.params;
    const { first_name, last_name, email, avatar } = request.body;
    User.findOneAndUpdate({ _id: id }, {
        first_name,
        last_name,
        email,
        avatar
    }, {
        new: true,
        useFindAndModify: true
    })
        .then(user => {
        response.json(user);
    })
        .catch(err => {
        response.status(400).json(err);
    });
};
module.exports.delete = (request, response) => {
    const { id } = request.params;
    User.deleteOne({ _id: id })
        .then(deleteConfirmation => {
        response.json(deleteConfirmation);
    })
        .catch(err => {
        response.status(400).json(err);
    });
};
//# sourceMappingURL=user.controller.js.map