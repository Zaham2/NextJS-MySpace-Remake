import FollowButton from "@/components/FollowButton/FollowButton";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";

// here would be a good place to dynamically declare metadata
export async function generateMetadata(props: any): Promise<Metadata> {
    const user = await prisma.user.findUnique({ where: { id: props.params.id } });
    return { title: `User profile of ${user?.name}` };
  }

export default async function UserProfile(props: any){
    const user = await prisma.user.findUnique({ where: {id: props.params.id }})
    const { name, bio, image, id } = user ?? {}

    return (
        <div>
            <h1>{name}</h1>

            <img 
                src={image!} 
                alt={`${name}'s profile`} 
            />

            <h1>Bio</h1>
            <p>{bio}</p>

            <FollowButton targetUserId={props.params.id}/>
        </div>
    )
}