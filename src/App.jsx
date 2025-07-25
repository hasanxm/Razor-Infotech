import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomePage from "./HomePage";
import QuoteSection from "./QuoteSection";
import AboutCompanyHome from "./AboutCompanyHome";
import Blogs from "./BlogsPage";
import WorkingProcess from "./components/WorkingProcess";
import BlogHome from "./BlogHome";
import HomeContactSection from "./HomeContactSection";
import Faq from "./Faq";
import TestimonialSection from "./TestimonialSection";
import AboutCompany from "./components/AboutCompany";
import CareerPage from "./components/CareerPage";
import BlogDetail from "./components/BlogDetails";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <AboutCompanyHome />
              <WorkingProcess />
              <BlogHome />
              <HomeContactSection />
              <Faq />
              <TestimonialSection />
              <QuoteSection />
              <Footer />
            </>
          }
        />
        <Route path="/about-company" element={<AboutCompany />} />
        <Route path="/career" element={<CareerPage />} />

        <Route
          path="/blogs"
          element={
            <>
              <Blogs />
              <Footer />
            </>
          }
        />
      </Routes>


      <Routes >
          <Route path="/blogs/:slug" element={<BlogDetail />} />
      </Routes>
       
    </Router>
  );
};

export default App;
