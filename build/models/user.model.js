"use strict";
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    first_name: { type: String, required: [true, "First name is required."] },
    last_name: { type: String, required: [true, "Last name is required."] },
    email: { type: String, required: [true, "You need to enter an e-mail address."] },
    avatar: { type: String, required: [true, "You forgot an Avatar! Paste a URL into the Avatar box."] }
}, { timestamps: true });
const User = (0, mongoose_1.model)('User', UserSchema);
module.exports = User;
//# sourceMappingURL=user.model.js.map