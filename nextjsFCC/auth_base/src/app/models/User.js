import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide a username"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "please provide a email"],
        unique: true
    },
    passward: {
        type: String,
        required: [true, "please provide a password"]
    },

    //role verified
    isVerified: {
        type: Boolean,
        default:false
    },
    isAdmin: {
        type: Boolean,
        default:false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    VerifyToken: String,
    VerifyTokenExpiry: Date,


})

//it is a special way to import a file in mongoose

const User = mongoose.models.users || mongoose.model("Uses", userSchema)

export default User;

