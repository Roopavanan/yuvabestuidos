"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiSend } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm, ValidationError } from "@formspree/react";
import { usePathname } from "next/navigation";

const MotionLink = motion(Link);

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [captchaDone, setCaptchaDone] = useState<boolean>(false);

  const [state, handleSubmit] = useForm("meoqwqra");

  const navLinks: string[] = ["/", "/about", "/work", "/career", "/contact"];

  useEffect(() => {
    if (isContactFormOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isContactFormOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleCaptchaChange = () => setCaptchaDone(true);

  return (
    <>
      <header
        className={`sticky top-0 w-full px-6 sm:px-12 md:px-16 lg:px-32 py-4 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white bg-opacity-50 shadow-lg backdrop-blur-md"
            : "bg-white bg-opacity-50"
        }`}
      >
        <div className="flex justify-between items-center">
          <MotionLink href="/" passHref>
            <Image
              src="/logo.png"
              alt="Logo"
              width={150}
              height={100}
              className="w-[150px] h-auto"
              priority
            />
          </MotionLink>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden lg:flex space-x-4 bg-gray-200 bg-opacity-20 backdrop-blur-lg px-6 py-2 rounded-lg mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {navLinks.map((path, index) => {
              const isActive = pathname === path; // ✅ now works
              return (
                <MotionLink
                  key={index}
                  href={path}
                  className={`relative flex items-center px-3 py-1.5 rounded-md text-sm transition-colors duration-200 ${
                    isActive ? "bg-gray-800 text-white" : "hover:bg-gray-300"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      className="w-2 h-2 bg-white rounded-full mr-2"
                      layoutId="dot"
                    />
                  )}
                  <span className="font-medium">
                    {path === "/"
                      ? "Home"
                      : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                  </span>
                </MotionLink>
              );
            })}
          </motion.nav>

          {/* Contact Button */}
          <button
            onClick={() => setIsContactFormOpen(true)}
            className="hidden lg:inline-flex px-4 py-2 border bg-yellow-400 border-violet-800 text-violet-800 rounded-lg hover:bg-violet-800 hover:text-white transition"
          >
            Book a Discovery Call
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-2xl text-violet-800 ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden mr-2 mt-4 flex flex-col items-center space-y-4 bg-gray-100 bg-opacity-90 backdrop-blur-md p-4 rounded-lg absolute right-0 top-16 w-64"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {navLinks.map((path, index) => {
              const isActive = pathname === path; // ✅ FIXED

              return (
                <MotionLink
                  key={index}
                  href={path}
                  className={`w-full flex items-center px-3 py-2 rounded-md text-base transition-colors duration-200 ${
                    isActive
                      ? "bg-violet-800 text-white"
                      : "hover:bg-violet-300"
                  }`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="font-medium">
                    {path === "/"
                      ? "Home"
                      : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                  </span>
                </MotionLink>
              );
            })}
          </motion.div>
        )}
      </header>

      {/* Contact Form Popup */}
      {isContactFormOpen && (
        <motion.div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-8 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setIsContactFormOpen(false)}
            >
              <AiOutlineClose size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Section */}
              <div className="flex flex-col justify-center items-center text-center">
                <h1 className="text-5xl font-medium text-[#371B34]">
                  Let&apos;s Connect
                </h1>
                <p className="text-2xl font-semibold font-secondary text-[#5829C7] mt-2">
                  We&apos;d love to hear from you!
                </p>
                <p className="text-lg text-[#757575] font-secondary font-semibold mt-2">
                  Got big goals? We’re here to help you hit them! Drop us a
                  message, and let’s work together to take your business to the
                  next level.
                </p>
                <Image
                  src="/home/form.gif"
                  alt="Contact Illustration"
                  width={500}
                  height={500}
                  className="mb-4"
                />
              </div>

              {/* Right Section with Form */}
              <form
                className="space-y-4 p-8 w-full rounded-lg border-2 border-violet-200 rounded-bl-lg rounded-br-lg rounded-tl-lg bg-white shadow-xl opacity-l-75"
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                  if (captchaDone) {
                    handleSubmit(e);
                  } else {
                    e.preventDefault();
                    alert("Please complete the reCAPTCHA.");
                  }
                }}
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="John Carter"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="user_phone"
                    placeholder="(123) 456 - 789"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                  <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Your message..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                    required
                  ></textarea>
                </div>

                <ReCAPTCHA
                  sitekey="6LduyJQqAAAAAFUf1YGFhoKAppjYnpeBhR2rYUQr"
                  onChange={handleCaptchaChange}
                />

                <div>
                  {captchaDone ? (
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full flex justify-between items-center bg-transparent border-2 border-violet-600 text-violet-800 font-semibold py-3 rounded-lg hover:bg-violet-200 transition"
                    >
                      <span className="ml-4">Send</span>
                      <FiSend className="mr-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="w-full bg-gray-300 text-gray-600 py-3 rounded-lg cursor-not-allowed"
                      onClick={() => alert("Please complete the reCAPTCHA.")}
                    >
                      Send
                    </button>
                  )}
                </div>

                {state.succeeded && (
                  <p className="text-green-600 text-lg mt-4 text-center">
                    We’ll get back to you shortly.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default NavBar;
