import mongoose, { Schema, model, Model } from "mongoose";
import { IProduct } from "../interfaces";

const productSchema = new Schema(
  {
    description: { type: String, required: true },
    images: [{ type: String }],
    inStock: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    sizes: [
      {
        type: String,
        enum: {
          values: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
          message: "Invalid size",
        },
      },
    ],
    slug: { type: String, required: true, unique: true },
    tags: [{ type: String }],
    title: { type: String, required: true },
    type: {
      type: String,
      required: true,
      enum: {
        values: ["shirts", "pants", "hoodies", "hats"],
        message: "Invalid type",
      },
    },
    gender: {
      type: String,
      required: true,
      enum: {
        values: ["men", "women", "kid", "unisex"],
        message: "Invalid gender",
      },
    },
  },
  {
    timestamps: true,
  }
);

// TODO: create index in Mongo

const Product: Model<IProduct> =
  mongoose.models.Product || model("Product", productSchema);

export default Product;
