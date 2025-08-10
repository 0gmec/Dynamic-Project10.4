
export default function BlogItem({post}) {
    

    
    
    
    return (
        <div>
            <h2>{post.title}</h2>
            <a href ={post.slug}></a>
            <p>{post.Content}</p>

        </div>
    )
}