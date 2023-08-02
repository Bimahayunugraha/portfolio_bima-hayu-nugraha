import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import ProjectOverview from "../components/ProjectOverview";
import Navbar from "../components/Navbar";
import ToTop from "../components/ToTop";
import Footer from "../components/Footer";
import MobileNavbar from "../components/MobileNavbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="tentang">
          <About />
        </section>
        <section id="project">
          <ProjectOverview />
        </section>
      </main>
      <ToTop />
      <Footer />
    </>
  );
};

export default HomePage;
