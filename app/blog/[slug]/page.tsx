
interface Post {
    title: string,
    slug: string,
    content: string
}

// (optional) create a props interface
// better to hace a typesafe app (:any not recommended)
// interface Props {
//     params: { slug: string }
// }

export default async function BlogPostPage(props: any){

    //remember that relative URLs wont work serverside!
    console.log(props)
    const posts: Post[] =
    await fetch('http://localhost:3000/api/content',{cache: 'no-store' })
    .then((res) => res.json())
    
    //We use the ! operator to tell the compiler that we know for certain we won't have a null value here
    //This prevents some TS errors
    const post = posts.find((post) => post.slug === props.params.slug)! //why use the non-null assertion operator?
    // Alternatively check for null values and throw the appropriate error


    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}