import mongoose from 'mongoose';

const { Schema, model: Model } = mongoose;
const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String,
});

export default Model('Book', bookSchema);
