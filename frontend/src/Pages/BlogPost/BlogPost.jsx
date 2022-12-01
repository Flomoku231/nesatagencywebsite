import React, { useEffect, useState } from "react";
import "../../Styles/PagesStyles/BlogPost/_BlogPost.scss";
import NavBar from "../../Components/NavBar";
import DateIcon from "../../Assets/Icons/DateIcon.svg";
import IntroSlider from "../LandingPage/IntroSlider";
import BlogCard from "../../Components/BlogCard";
import Footer from "../LandingPage/Footer";
import { Link } from "react-router-dom";

const BlogPost = () => {
  const [blogPosts, setblogPosts] = useState([]);
  const [numberOfPages, setnumberOfPages] = useState(0);
  const [PagesNumber, setPagesNumber] = useState(0);

  const goToPrevious = () => {
    setPagesNumber(Math.max(0, PagesNumber - 1));
  };

  const goToNext = () => {
    setPagesNumber(Math.min(numberOfPages - 1, PagesNumber + 1));
  };
  const Pages = new Array(numberOfPages).fill(null).map((v, i) => i);
  useEffect(() => {
    fetch(`http://localhost:7000/blog/posts?Pages=${PagesNumber}`)
      .then((response) => response.json())
      .then(({ totalPages, blogPosts }) => {
        setblogPosts(blogPosts);
        setnumberOfPages(totalPages);
      });
  }, [PagesNumber]);
  return (
    <main className="BlogPost__Container">
      <NavBar />
      <IntroSlider
        HeadText="News"
        Quote="Latest News, Updates & Tips About NESAT Agency"
        className="BlogPost__Intro"
      />
      <div className="BlogPost__Content">
        <h1 id="TextContent--head">All Posts</h1>
        <hr id="BlogPost--line" />
        <div className="BlogPost__Content--first">
          {blogPosts.map((blogPost) => {
            return (
              <div className="BlogPost__Content--each" key={blogPost._id}>
                <a href={`/BlogPostDetails/${blogPost._id}`}>
                <BlogCard
                  ImageUrl={blogPost.postImageURL}
                  Date={blogPost.postDate}
                  Title={blogPost.postTitle}
                  DateIcon={DateIcon}
                  Description={blogPost.postDescription}
                />
                </a>
              </div>
            );
          })}
        </div>
        <button onClick={goToPrevious}>Prev</button>
        {Pages.map((pageIndex) => {
          return (
            <button onClick={() => setPagesNumber(pageIndex)}>
              {pageIndex + 1}
            </button>
          );
        })}
        <button onClick={goToNext}>Next</button>
      </div>
      <Footer />
    </main>
  );
};

export default BlogPost;
