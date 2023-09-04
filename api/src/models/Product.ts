import mongoose, {Document} from  "mongoose";

export type ProductDocument = Document & {
    designerId : number;
    category: string;
    subCategory: string;
    title: string;
    description?: string;
    price: number;
    images: string[];
    material?: string;
    color?: string;
    length?: string;
    closureType?: string;
    pendantDesign?: string;
    size?: string[];
    gemstone?: string;
    style?: string;
    collections?: string;
    occasions?: string;
    salePrice?: number;
    discountPercentage?: number; 
    designerTouch?: string;
    availability: number;
}

export const ProductSchema = new mongoose.Schema({
    designerId: {
        type: Number,
        required: true,
        unique: true        
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        required: true,
    },
    subCategory: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String        
    },
    price: {
        type: Number,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
    material: {
        type: String,
    },
    color: {
        type: String,        
    },
    length: {
        type: String,
    },
    closureType: {
        type: String,        
    },
    pendantDesign: {
        type: String,
    },
    size: {
        type: [String],        
    },
    gemstone: {
        type: String,
    },
    style: {
        type: String,        
    },
    collections: {
        type: String,
    },
    occasions: {
        type: String,        
    },
    salePrice: {
        type: Number,
    },
    discountPercentage: {
        type: Number,        
    },
    designerTouch: {
        type: String,
    },
    availability: {
        type: Number,        
    },
});

export default mongoose.model<ProductDocument>("product", ProductSchema);