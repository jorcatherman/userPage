import { model, Schema, Model, Document } from 'mongoose'

interface User extends Document{
    first_name: string;
    last_name: string;
    email: string;
    avatar: string; // This could also be a File type, but for the REQRES api, we are using the links provided by the API.
}

const UserSchema: Schema = new Schema<User>({
    first_name: {type: String, required: [true, "First name is required."]}, // These aren't working
    last_name: {type: String, required: [true, "Last name is required."]},
    email: {type: String, required: [true, "You need to enter an e-mail address."]},
    avatar: {type: String, required: [true, "You forgot an Avatar! Paste a URL into the Avatar box."]}
}, {timestamps: true})

const User: Model<User> = model('User', UserSchema)
export = User;