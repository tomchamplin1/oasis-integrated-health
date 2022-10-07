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
    <div className="px-10 pt-12 md:pt-12 gap-5">
      <h3 class="text-center text-lg md:text-left text-blue-700 font-extrabold">
        ALL POSTS
      </h3>
      <h3 class="mb-12 md:text-4xl text-5xl font-extrabold leading-tight md:text-left text-center">
        Blog
      </h3>
      {postlist.length &&
        postlist.map((post, i) => {
          return (
            <div
              key={i}
              className="text-center w-1/5 mx-auto rounded border border-gray-200 overflow-hidden hover:shadow-lg duration-700"
            >
              <div className="mx-auto">
                {post.thumbnail && (
                  <img
                    className="mx-auto"
                    width={80}
                    src={post.thumbnail}
                    alt=""
                  />
                )}
                <h2 className="post-title">
                  <Link className="links" to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
              </div>
              <small>Published on {post.date}</small>
              <hr />
              <ReactMarkdown source={excerptList[i]} escapeHtml={false} />
              <small>
                <Link className="links" to={`/blog/${post.slug}`}>
                  Read more
                </Link>
              </small>
            </div>
          );
        })}
    </div>
  );
};

export default PostList;
