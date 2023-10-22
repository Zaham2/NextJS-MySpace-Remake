// Next detects no data fetching is done here and automatically caches this page
export const dynamic = 'force-static';  //this is to force this behavior

import { Metadata } from "next";

// Intellisense  through typing: ctrl+space for autocomplete
export const metadata: Metadata = {
    title: "About Us",
    description: "Desc",
}


export default function About() {
    return(
        <main>
            <h1>About</h1>
            <p>Welcome to myspace</p>
        </main>
    )
}