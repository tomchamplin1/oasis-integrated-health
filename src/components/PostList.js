import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import postlist from "../posts.json";
import { format, parseISO } from "date-fns";

const PostList = () => {
  const excerptList = postlist.map((post) => {
    return post.content.split(" ").slice(0, 20).join(" ") + "...";
  });
  return (
    <div className="px-10 pt-12 md:pt-12 gap-5 w=3/5">
      <h3 class="text-center text-lg md:text-left text-blue-700 font-extrabold">
        ALL POSTS
      </h3>
      <h3 class="mb-12 md:text-4xl text-5xl font-extrabold leading-tight md:text-left text-center">
        Blog
      </h3>
      <div class="pb-24 grid sm:items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 justify-items-center px-12 gap-5">
      {postlist.length &&
        postlist.map((post, i) => {
          return (
            <Link to={`/blog/${post.slug}`}
              key={i}
              className="flex-shrink-0 text-center block max-w-sm bg-white shadow-lg hover:scale-105 rounded-3xl"
            >
              <div className="mx-auto">
                {post.thumbnail && (
                  <img
                    className="mx-auto"
                    width={400}
                    src={post.thumbnail}
                    alt=""
                  />
                )}
                <h1 className="text-2xl pt-2">
                    {post.title}
                </h1>
              </div>
              <h3 class="text-md pb-2">{post.date}</h3>
              <hr />
              <ReactMarkdown source={excerptList[i]} escapeHtml={false} />
            </Link>

            
          );
        })}
        </div>

    </div>
  );
};

export default PostList;
