import mongoose from 'mongoose';

// Cook Profile Schema
const cookProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    bio: String,
    specialties: [String],
    experienceYears: { type: Number, default: 0 },
    menu: [
      {
        dishName: { type: String, required: true },
        description: String,
        price: Number,
        isAvailable: { type: Boolean, default: true },
      },
    ],
    rating: {
      average: { type: Number, default: 0 },
      totalReviews: { type: Number, default: 0 },
    },
    serviceOptions: {
      delivery: { type: Boolean, default: true },
      homeService: { type: Boolean, default: false },
    },
    documents: {
      idProof: String,
      foodLicense: String,
    },
  },
  { timestamps: true }
);

const CookProfile = mongoose.model('CookProfile', cookProfileSchema);
export default CookProfile;
