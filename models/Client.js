import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      maxlength: [40, "Name cannot exceed 50 characters"],
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: Number,
      required: true,
      maxlength: [20, "Phone must be less than 20 characters"],
    },

    service: {
      type: String,
      required: true,
    },

    message: {
      type: String,
    },
    status: {
      type: String,
      default: "pending",
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Client || mongoose.model("Client", ClientSchema);
