var mongoose = require ('mongoose');

var userSchema = new mongoose.Schema ({
    name: {type: String},
    email: {type:String, unique: true },
    password: {type: String}
});

var User = mongoose.model('users',userSchema);

module.exports = User;