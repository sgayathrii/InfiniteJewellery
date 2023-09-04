import mongoose, { Document, Schema} from "mongoose";

export type CategoryDocument = Document & {
  categoryName: string;
  imageUrl: string;
};

const CategorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true    
  },
  imageUrl: {
    type: String,    
  },
  productIds: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product", 
    },
  ],
});

export default mongoose.model<CategoryDocument>("category", CategorySchema);