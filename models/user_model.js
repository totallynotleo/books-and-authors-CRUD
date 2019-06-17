const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({});
UserSchema.plugin(passportLocalMongoose, {
    usernameField: 'email'
});
const UserModel = mongoose.model('User', UserSchema);

module.exports = { UserSchema, UserModel };
