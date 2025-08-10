import {useState} from 'react'
import { posts } from "../lib/posts"
import BlogItem from './BlogItem'

export default function BlogList() {
const [blogPosts, setBlogPosts]= useState(posts)

console.log(blogPosts)

    return (
        <div>
            <h2>Blog Post</h2>
            <ul>

            {blogPosts.map((post)=>
                 <li>{post.title}</li>)}
                 <BlogItem post={posts}/>
            </ul>
            
        </div>

)
}