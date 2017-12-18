const mongoose = require('mongoose');
const { Schema } = mongoose;
//above line same as below
// const Schema = mongoose.Schema;

const userSchema = new Schema({
	googleID: String
});

mongoose.model('users', userSchema);