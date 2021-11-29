"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect("mongodb://localhost/userproj", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
    console.log("Established a connection");
})
    .catch(() => {
    console.log("There has been an error");
});
//# sourceMappingURL=mongoose.config.js.map