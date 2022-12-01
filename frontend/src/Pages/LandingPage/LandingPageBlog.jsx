import React, { useEffect, useState } from "react";
import BlogCard from "../../Components/BlogCard";
import ClickButton from "../../Components/ClickButton";
import axios from "../../axiosInstance/axios.js";
import DateIcon from "../../Assets/Icons/DateIcon.svg";
import "../../Styles/PagesStyles/LandingPageStyles/_LandingPageBlog.scss";
import { Link } from "react-router-dom";

const LandingPageBlog = () => {
  const [homeBlogs, sethomeBlogs] = useState([]);
  const [currentPage] = useState(1);
  const [postPerPage] = useState(3);

  useEffect(() => {
    async function fetchHomeBlogs() {
      const req = await axios.get("/home/blog");
      sethomeBlogs(req.data);
    }
    fetchHomeBlogs();
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = homeBlogs.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <main className="LandingPageBlog__Container">
      <div className="LandingPageBlog__Head--Content">
        <span>
          <h2 id="Header--text">Latest News</h2>
          <h1 id="Bold--text">Read Latest Update</h1>
        </span>
      </div>
      <div className="LandingPageBlog__Cards">
        {currentPost.map((homeBlog) => {
          return (
            <div className="Individual__Card" key={homeBlog._id}>
                <a href={`/BlogPostDetails/${homeBlog._id}`}>
                  <BlogCard
                    ImageUrl={homeBlog.postImageURL}
                    Date={homeBlog.postDate}
                    Title={homeBlog.postTitle}
                    DateIcon={DateIcon}
                    Description={homeBlog.postDescription}
                  />
                </a>
            </div>
          );
        })}
      </div>
      <div className="MoreNews--button">
        <Link to="/Blog/Post">
          {" "}
          <ClickButton
            name="More News"
            buttonSizes="large--sizes"
            buttonStyles="secondary--styles"
          />
        </Link>
      </div>
    </main>
  );
};

export default LandingPageBlog;
