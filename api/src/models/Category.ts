import mongoose, { Document } from "mongoose";

export type CategoryDocument = Document & {
  categoryName: string;
  imageUrl: string;
};

const CategorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
    unique: true,
  },
  imageUrl: {
    type: String,    
  },
});

export default mongoose.model<CategoryDocument>("category", CategorySchema);