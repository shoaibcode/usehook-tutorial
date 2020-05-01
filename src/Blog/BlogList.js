import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./blog-list.css";

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
    <div>
      <h2 className="blog-list-title">Blog List</h2>
      <ul className="blog-list">
        {blogList.map((blogListItem) => {
          return (
            <li className="blog-list-item" key={blogListItem.id}>
              <Link to={`/blogs/${blogListItem.id}`}>{blogListItem.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogList;
