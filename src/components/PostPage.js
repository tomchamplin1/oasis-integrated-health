import React from "react"
import { useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import postlist from "../posts.json"

const PostPage = () => {
    const params = useParams()
    const validId = params.id;

    var post = {};
    for (var i = 0, len = postlist.length; i < len; i++) {
        post[postlist[i].id] = postlist[i];
    }

    console.log(post[validId])

    return (
        <div className="px-10 pt-12 md:pt-12 gap-5">
      <h3 class="text-center text-lg md:text-left text-blue-700 font-extrabold">
        BLOG
      </h3>
     
        <h1 class="mb-12 md:text-4xl text-5xl font-extrabold leading-tight md:text-left text-center">{post[validId].title}</h1>
        <small>Published on {post[validId].date} by {post[validId].author}</small>
        <hr/>
        <h1>{post[validId].content} </h1>
    </div>
    )
}

export default PostPage;