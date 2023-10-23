// You dont need to put the apis in the api folder,
// but thats good convension to follow

import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

const posts = [
    {
        title: "Lorem1",
        slug: "lorem1",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis sequi modi voluptates quos ab possimus animi accusamus! Repellat iste incidunt odit quas tempora adipisci impedit fugit similique voluptas illum. Officia!"
    },
    {
        title: "Lorem2",
        slug: "lorem2",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis sequi modi voluptates quos ab possimus animi accusamus! Repellat iste incidunt odit quas tempora adipisci impedit fugit similique voluptas illum. Officia!"
    },
    {
        title: "Lorem3",
        slug: "lorem3",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis sequi modi voluptates quos ab possimus animi accusamus! Repellat iste incidunt odit quas tempora adipisci impedit fugit similique voluptas illum. Officia!"
    }
]

export async function GET() {

    const session = await getServerSession();

    // if(!session){
    //     return something;
    // }

    return NextResponse.json(posts)
}
