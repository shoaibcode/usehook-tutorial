import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      {loading ? (
        "Loading...."
      ) : (
        <>
          <div>
            <div>Title:{blogDetails.title}</div>
            <div>Blog: {blogDetails.body}</div>
          </div>

          <ul>
            {blogComments.map((blogComment) => {
              return (
                <li key={blogComment.id}>
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
