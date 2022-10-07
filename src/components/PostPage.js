import React from "react"
import { useParams } from "react-router-dom"
import postlist from "../posts.json"

const PostPage = () => {
    const params = useParams()
    const postSlug = params.slug;

    var post = {};
    for (var i = 0, len = postlist.length; i < len; i++) {
        post[postlist[i].slug] = postlist[i];
    }

    return (
        <div className="px-10 pt-12 md:pt-12 gap-5">
      <h3 class="text-center text-lg text-blue-700 font-extrabold">
        BLOG
      </h3>
        <h1 class="mb-2 md:text-4xl text-6xl font-extrabold leading-tight text-center">{post[postSlug].title}</h1>
        <h2 class="md:text-sm text-sm leading-tight text-center">Published on {post[postSlug].date} by {post[postSlug].author}</h2>
        <hr class="mb-12" />
        <h1 class="mb-12 md:text-lg text-lg leading-tight text-center">{post[postSlug].content} </h1> 
    </div>
    )
}

export default PostPage;