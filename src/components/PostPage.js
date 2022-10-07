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
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 w-4/5 md:w-3/5 mx-auto">
        <h1 class="pt-12 pb-2 md:text-4xl text-6xl font-extrabold leading-tight md:text-left text-center w-2/5">{post[postSlug].title}</h1>
        <h2 class="md:text-sm text-sm font-extrabold leading-tight text-left">{post[postSlug].author}</h2>
        <h2 class="pb-5 md:text-sm text-sm leading-tight text-left">{post[postSlug].date}</h2>
        {post[postSlug].thumbnail && (
                  <img
                    className="pb-5"
                    width={80}
                    src={post[postSlug].thumbnail}
                    alt={post[postSlug].title}
                  />
                )}
        <h1 class="mb-12 md:text-lg text-lg leading-tight text-left">{post[postSlug].content} </h1> 
    </div>
    )
    }

export default PostPage;