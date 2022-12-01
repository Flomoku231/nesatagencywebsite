import React, { useState, useEffect } from "react";
import axios from "../../axiosInstance/axios.js";
import "../../Styles/PagesStyles/BlogPostDetails/_BlogPostDetails.scss";
// import BlogPost1 from "../../Assets/Images/BlogPost1.jpg";
import BlogPostDetailsCard from "./BlogPostDetailsCard";
import NavBar from "../../Components/NavBar";
import Footer from "../LandingPage/Footer";
import LandingPageBlog from "../LandingPage/LandingPageBlog";
import { useParams } from "react-router-dom";

const BlogPostDetails = () => {
  const [Products, setProduct] = useState([]);

  const params = useParams();
  const _id = params._id;

  useEffect(() => {
    async function fetchSingleBlog() {
      const req = await axios.get(`/home/blog/post/${_id}`);
      setProduct(req.data);
    }
    fetchSingleBlog();
  }, [_id]);
  return (
    <main className="BlogPostDetails__Container">
      <NavBar />
      <div className="Container">
        {Products &&
          Products.map((Product) => {
            return (
              <div className="Container__component" key={Product._id}>
                <BlogPostDetailsCard
                  PostDate={Product.postDate}
                  PostTitle={Product.postTitle}
                  FirstPicture={Product.postImageURL}
                  SecondPicture={Product.postImageURL}
                  ThirdPicture={Product.postImageURL}
                  PostImage={Product.postImageURL}
                  PostDetails={Product.postDescription}
                />
              </div>
            );
          })}
      </div>

      <LandingPageBlog />
      <br />
      <Footer />
    </main>
  );
};

export default BlogPostDetails;
