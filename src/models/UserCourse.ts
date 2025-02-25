import mongoose from "mongoose";

const userCourseSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'courses',
        required: true
    },
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['active', 'completed', 'expired'],
        default: 'active'
    }
}, { timestamps: true });

// Prevent duplicate course purchases
userCourseSchema.index({ userId: 1, courseId: 1 }, { unique: true });

const UserCourse = mongoose.models.usercourses || mongoose.model("usercourses", userCourseSchema);

export default UserCourse;
