import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import AboutUs from "./Pages/AboutUs/AboutUs";
import BlogPost from "./Pages/BlogPost/BlogPost";
import BlogPostDetails from "./Pages/BlogPostDetails/BlogPostDetails";
import ContactUs from "./Pages/ContactUsPage/ContactUs";
import FindJobForm from "./Pages/FindJobForm/FindJobForm";
import LandingPage from "./Pages/LandingPage/LandingPage";
import JobRecruitment from './Pages/OurServicesPage/JobRecruitment'
import Consultancy from './Pages/OurServicesPage/Consultancy'
import OurTeamDetails from "./Pages/OurTeamDetails/OurTeamDetails";
import TrainingSection from "./Pages/TrainingSection/TrainingSection";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingPage/>} path='/' />
        <Route element={ <AboutUs/> } path='/AboutUs' />
        <Route element={ <JobRecruitment/> } path='/Services/jobRecruitment'/>
        <Route element={ <ContactUs/> } path='/ContactUs'/>
        <Route element={ <OurTeamDetails /> } path='/TeamMembersDetails' />
        <Route element={ <TrainingSection/> } path='/Services/Training' />
        <Route element={ <Consultancy/> } path='/Services/Consultancy'/>
        <Route element={ <BlogPostDetails/> } path='/BlogPostDetails/:_id'/>
        <Route element={ <BlogPost/> } path='/Blog/Post' />
        <Route element={ <FindJobForm/> } path='/FindJobs'/>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
