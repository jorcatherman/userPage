"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const User = require("../models/user.model");
const UserController = require("../controllers/user.controller");
//Not sure what type I should assign to this.
module.exports = function (app) {
    // app.post('/api/users', UserController.initialize)
    app.get('/api/users', UserController.list);
    app.post('/api/users/create', UserController.create);
    app.get('/api/users/:id', UserController.detail);
    app.put('/api/users/update/:id', UserController.update);
    app.delete("/api/users/delete/:id/", UserController.delete);
    app.get('/initialize', (req, res) => {
        const fetchRandomData = () => {
            return axios_1.default.get("https://reqres.in/api/users?per_page=20")
                .then(({ data }) => {
                for (let i = 0; i < data.data.length; i++) {
                    const user = new User({
                        first_name: data.data[i].first_name,
                        last_name: data.data[i].last_name,
                        email: data.data[i].email,
                        avatar: data.data[i].avatar
                    });
                    user.save();
                    console.log(user);
                    console.log(user.first_name);
                }
            })
                .catch((err) => {
                console.log(err);
            });
        };
        fetchRandomData();
    });
};
//# sourceMappingURL=user.routes.js.map