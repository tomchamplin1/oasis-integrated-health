import React from "react"
import { useParams } from "react-router-dom"
import postlist from "../posts.json"
import md from 'markdown-it';


const PostPage = () => {
    const params = useParams()
    const postSlug = params.slug;

    var post = {};
    for (var i = 0, len = postlist.length; i < len; i++) {
        post[postlist[i].slug] = postlist[i];
    }

    const content = post[postSlug].content;

    return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 w-4/5 md:w-3/5 mx-auto">
        <h1 class="pt-12 pb-2 md:text-5xl text-6xl font-extrabold leading-tight text-center">{post[postSlug].title}</h1>
        <h2 class="md:text-sm text-sm font-extrabold leading-tight text-center">{post[postSlug].author}</h2>
        <h2 class="pb-8 md:text-sm text-sm leading-tight text-center">{post[postSlug].date}</h2>
        <hr class="pb-8 w-1/2 mx-auto"></hr>
        <div class="mx-auto mb-12 prose text-left" dangerouslySetInnerHTML={{ __html: md().render(content) }}  />
    </div>
    )
    }

export default PostPage;