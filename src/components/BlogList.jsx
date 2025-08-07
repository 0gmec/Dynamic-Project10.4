import {useState} from 'react'
import { posts } from "../lib/posts"

export default function BlogList() {
const [blogPosts, setBlogPosts]= useState(posts)

console.log(blogPosts)

    return (
        <div>
            <h2>Blog Post</h2>
            <ul>

            {blogPosts.map((post)=>
                 <li>{post.title}</li>)}
            </ul>
            
        </div>

)
}