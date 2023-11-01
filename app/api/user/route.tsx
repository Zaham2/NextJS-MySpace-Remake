import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";


export async function GET(){
    const users = await prisma.user.findMany();
    return NextResponse.json(users)
}

export async function PUT(req: Request){
    const session = await getServerSession(authOptions)
    const currentUserEmail = session?.user?.email

    const data = await req.json()
    data.age = Number(data.age)

    // in a real app, you would want to validate the data before updating the user
    const user = await prisma.user.update({
        where: {
            email: currentUserEmail!,
        },
        data
    });

    return NextResponse.json(user)
}