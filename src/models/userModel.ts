import mongoose, { Document, Model, Schema } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  id: string;
  coursesPurchased: Array<{
    courseId: string;
    purchaseDate: Date;
    status: 'active' | 'completed';
    dueDate: Date;
    progress: number;
    certificateStatus: 'not_issued' | 'issued';
    completionDate: Date;
  }>;
  labsCompleted: Array<{
    labId: string;
    startDate: Date;
    completionDate: Date;
    status: 'not_started' | 'in_progress' | 'completed';
  }>;
  studyTimes: Array<{
    courseId: string;
    duration: number;
    date: Date;
  }>;
  courseCompletions: Array<{
    courseId: string;
    courseTitle: string;
    completionDate: Date;
  }>;
  labCompletions: Array<{
    labId: string;
    labTitle: string;
    completionDate: Date;
  }>;
  isVerified: boolean;
  isAdmin: boolean;
  createdAt: Date;
  lastLogin: Date;
  profileImage: string;
  forgotPasswordToken?: string;
  forgotPasswordTokenExpiry?: Date;
  verifyToken?: string;
  verifyTokenExpiry?: Date;
  hasProfileImage?: boolean;
}

const UserSchema: Schema<IUser> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false,
  },
  coursesPurchased: [{
    courseId: { type: String, required: true },
    purchaseDate: { type: Date, default: Date.now },
    status: {
      type: String,
      enum: ['active', 'completed'],
      default: 'active'
    },
    dueDate: { type: Date, required: true },
    progress: { type: Number, default: 0 },
    certificateStatus: {
      type: String,
      enum: ['not_issued', 'issued'],
      default: 'not_issued'
    },
    completionDate: { type: Date, default: Date.now }
  }],
  labsCompleted: [{
    labId: { type: String, required: true },
    startDate: { type: Date, default: Date.now },
    completionDate: Date,
    status: {
      type: String,
      enum: ['not_started', 'in_progress', 'completed'],
      default: 'not_started'
    }
  }],
  studyTimes: [{
    courseId: String,
    duration: Number,
    date: { type: Date, default: Date.now }
  }],
  courseCompletions: [{
    courseId: String,
    courseTitle: String,
    completionDate: { type: Date, default: Date.now }
  }],
  labCompletions: [{
    labId: String,
    labTitle: String,
    completionDate: { type: Date, default: Date.now }
  }],
  isVerified: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  lastLogin: { type: Date, default: Date.now },
  profileImage: { type: String, default: null },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date
});

UserSchema.virtual('hasProfileImage').get(function() {
  return this.profileImage !== null;
});

UserSchema.set('toJSON', { virtuals: true });
UserSchema.set('toObject', { virtuals: true });

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
