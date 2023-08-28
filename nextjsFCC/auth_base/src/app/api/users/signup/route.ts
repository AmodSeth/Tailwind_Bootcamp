import {connect} from "@/app/DBconfig/dbconfig"
import User from "@/app/models/User"

import {NextRequest, NextResponse} from "next/server"
import bcrypt from "bcrypt";

//it is a user based request method if post is dont then post is executed

connect()

export async function POST(request: NextRequest) {
    try {
        const requestBody = await request.json()
        //do the own validation
        const { username, email, password } = requestBody;
        console.log(requestBody);

        //check if the user already exist 
        //always use await
        const user = await User.findOne({ email })
        if (user) {
            return NextResponse.json({
                error:"user already exist"
            })
        }
        //hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //create a new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,

        })

        //save this to the user base 
        const savedUser = await newUser.save()
        console.log(savedUser)
        return NextResponse.json({
            message: "user created successfully",
            success: true,
            status: 201,
            savedUser
        })

    } catch (error:any) {
        return NextResponse.json({
            error: error.message,
            status:500
        })
    }
}