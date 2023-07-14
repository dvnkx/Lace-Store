import mongoose from "mongoose";

const CardSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
      unique: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    materials: {
      type: String,
      required: true,
    },
    fastener: String,
    soleHeight: {
      type: Number,
      required: true,
    },
    generalHeight: {
      type: Number,
      required: true,
    },
    technology: String,
    images: {
      type: [String],
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    forKids: { type: Boolean, required: true },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

export default mongoose.model("Card", CardSchema);
