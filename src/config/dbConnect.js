import mongoose from 'mongoose';

mongoose.connect('string');

let db = mongoose.connection;

export default db;
