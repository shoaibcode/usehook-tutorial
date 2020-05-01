import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Bloglist.css";

const BlogList = () => {
  const [blogList, setBlogList] = useState([]);
  useEffect(() => {
    // API
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setBlogList(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
    // State Update
    // Render List on UI
  }, []);

  return (
    <ul class="blog-list">
      {blogList.map((blogListItem) => {
        return (
          <li class="blog-list-item" key={blogListItem.id}>
            <Link to={`/blogs/${blogListItem.id}`}>{blogListItem.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default BlogList;
