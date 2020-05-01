import React, { useEffect, useState } from "react";
import axios from "axios";

import "./blog-details.css";

const BlogDetails = (props) => {
  const { match } = props;

  const [loading, toggleLoading] = useState(true);

  const [blogDetails, setBlogDetails] = useState(null);
  const [blogComments, setBlogComments] = useState(null);

  useEffect(() => {
    const blogDetailsPromise = axios.get(
      `https://jsonplaceholder.typicode.com/posts/${match.params.blogId}`
    );

    const blogCommentsPromise = axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${match.params.blogId}`
    );

    Promise.all([blogDetailsPromise, blogCommentsPromise]).then((response) => {
      setBlogDetails(response[0].data);
      setBlogComments(response[1].data);
      toggleLoading(false);
    });
  }, []);

  return (
    <div className="container">
      {loading ? (
        "Loading...."
      ) : (
        <>
          <div>
            <div className="blog-title">{blogDetails.title}</div>
            <div className="blog-content"> {blogDetails.body}</div>
          </div>

          <ul className="comment-list">
            {blogComments.map((blogComment) => {
              return (
                <li className="comment-list-item" key={blogComment.id}>
                  <div>{blogComment.body}</div>
                  <div>{blogComment.email}</div>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default BlogDetails;
