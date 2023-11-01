import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";


export default async function Home() {

  
  return (
    <main>
      <h1>Homepage</h1>
    </main>
  )
}
