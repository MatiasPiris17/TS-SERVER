import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../interfaces/car.interface";

const ItemSchema = new Schema<Car>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, enum: ["Sedan", "SUV", "Pickup"] },
    year: { type: Number },
    price: { type: Number },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const itemModel =  model("Items", ItemSchema);