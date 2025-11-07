const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Chef Schema
const chefSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    mobileNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    profilePhoto: {
      type: String, // store image URL
      default: "",
    },
    kitchenImages: [
      {
        type: String, // array of image URLs
      },
    ],
    bio: {
      type: String,
      maxlength: 500,
    },
    experience: {
      type: String,
    },
    foodType: {
      type: String,
      enum: ["veg", "nonveg", "both"],
      default: "both",
    },
    profileCompleted: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["pending", "active", "suspended"],
      default: "pending",
    },
  },
  { timestamps: true }
);

// Hash password before saving
chefSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//Compare entered password with hashed one
chefSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("Chef", chefSchema);