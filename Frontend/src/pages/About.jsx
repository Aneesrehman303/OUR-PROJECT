import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-gray-600">
          Welcome to Uneza University! We are committed to providing exceptional education and fostering innovation.
        </p>
        {/* Add more content as needed */}
      </div>
    </>
  );
};

export default About;