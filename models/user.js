var mongoose = require('mongoose');
var Schema = mongoose.Schema;

    var UserSchema = new Schema({
        user:{type: String, unique: true},
        info: {
            username: {type: String, required: true},
            password: {type: String, required: true}
        }
    });

    module.exports = mongoose.model('Userdb', UserSchema);