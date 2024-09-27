import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import JobSearchSection from "./pages/Homepage/JobSearchSection";
import HomepagePage from "./pages/Homepage";
import Footer from "./components/Footer";
import ClientTestimonialsSection from "./pages/Homepage/ClientTestimonialsSection";
import FeaturedJobsSection from "./pages/Homepage/FeaturedJobsSection";


function App() {
  return (
    <div>
     <Header />
     <JobSearchSection />
     <HomepagePage />
     <FeaturedJobsSection />
     <ClientTestimonialsSection />
     <Footer />
    </div>
  );
}

export default App;
