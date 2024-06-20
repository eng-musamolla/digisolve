import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/lib/models/user";


export const GET = async (req: Request, res: Response) => {

    try {
       await connectDB();
       const users = await User.find({});
       return new NextResponse( JSON.stringify(users) , { status: 200 });
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
        return new NextResponse( "Error connecting to MongoDB" );
    }

    return new NextResponse( "Hello from GET inside the server" );
};