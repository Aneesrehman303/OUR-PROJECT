import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTimes } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#a82034] text-white px-6 md:px-12 py-12">
      {/* Top Section */}
      <div className="grid md:grid-cols-4 gap-8 mb-10">
        {/* Logo + Contact */}
        <div className="space-y-4">
          <img src="/logo.png" alt="Uneza Logo" className="w-24" /> {/* Replace with your logo */}
          <h2 className="text-xl font-semibold">THE UNIVERSITY OF UNEZA</h2>
          <div className="mt-4 space-y-2 text-sm">
            <p className="flex items-center gap-2">📍 Jl. P.B Sudirman, Denpasar</p>
            <p className="flex items-center gap-2">✉ support@uneza.com</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Social Media</h3>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#a82034] transition">
              <FaFacebookF />
            </div>
            <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#a82034] transition">
              <FaTimes />
            </div>
            <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#a82034] transition">
              <FaInstagram />
            </div>
            <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#a82034] transition">
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="space-y-4 md:col-span-2">
          <h3 className="text-lg font-semibold">Subscribe Our Newsletter</h3>
          <div className="flex items-center bg-[#bd3b4f] px-4 py-2 rounded">
            <input
              type="email"
              placeholder="Your Email Address"
              className="bg-transparent outline-none flex-1 text-white placeholder:text-white"
            />
            <button className="bg-white text-[#a82034] px-4 py-2 rounded ml-2 font-bold">
              ↗
            </button>
          </div>
        </div>
      </div>

      <hr className="border-white/30 mb-10" />

      {/* Bottom Links Section */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
        {/* About */}
        <div>
          <h4 className="font-semibold mb-3">About</h4>
          <ul className="space-y-2">
            <li>Academics</li>
            <li>Campus administrations</li>
            <li>Campus safety</li>
            <li>Office chancellor</li>
            <li>Facility services</li>
            <li>Human resources</li>
          </ul>
        </div>

        {/* Educations */}
        <div>
          <h4 className="font-semibold mb-3">Educations</h4>
          <ul className="space-y-2">
            <li>Academic departments</li>
            <li>Undergraduate programs</li>
            <li>Graduate programs</li>
            <li>Institutes and Centers</li>
            <li>Academic policy</li>
            <li>Academic calendar</li>
            <li>Publications</li>
          </ul>
        </div>

        {/* Admission */}
        <div>
          <h4 className="font-semibold mb-3">Admission</h4>
          <ul className="space-y-2">
            <li>Undergraduate admission</li>
            <li>Graduate admission</li>
            <li>International affairs office</li>
            <li>Special students</li>
            <li>Financial aid</li>
            <li>Prospective students</li>
            <li>Student life</li>
          </ul>
        </div>

        {/* Research */}
        <div>
          <h4 className="font-semibold mb-3">Research</h4>
          <ul className="space-y-2">
            <li>Research overview</li>
            <li>eLink research</li>
            <li>Development center</li>
            <li>Research center</li>
            <li>Laboratorium center</li>
            <li>Information technology</li>
            <li>Library</li>
          </ul>
        </div>

        {/* Campus Life */}
        <div>
          <h4 className="font-semibold mb-3">Campus Life</h4>
          <ul className="space-y-2">
            <li>Campus locations</li>
            <li>Class timetables</li>
            <li>Faculties and Schools</li>
            <li>Staff and Members</li>
            <li>Campus events</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
