"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import Head from "next/head";
import { useForm, ValidationError } from "@formspree/react";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

const Contact: React.FC = () => {
  const [captchaDone, setCaptchaDone] = useState<boolean>(false);
  const [state, handleSubmit] = useForm("meoqwqra");

  // Handle reCAPTCHA success
  const handleCaptchaChange = (token: string | null) => {
    setCaptchaDone(!!token);
  };

  return (
    <div className="relative lg:min-h-screen bg-gray-50 py-10 px-4 sm:px-6 md:px-8 lg:px-16">
      <Head>
        <title>Contact Us | Yuvabe Studios</title>
        <meta
          name="description"
          content="Get in touch with Yuvabe Studios for inquiries, collaborations, or feedback. We're here to help you achieve your goals!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/profile/yb-logo.png" />
      </Head>

      <main className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h1 className="text-4xl sm:text-5xl font-medium text-[#371B34]">
              Let&apos;s Connect
            </h1>
            <p className="text-xl sm:text-2xl font-semibold font-secondary text-[#5829C7] mt-2">
              We&apos;d love to hear from you!
            </p>
            <p className="text-base sm:text-lg text-[#757575] font-secondary font-semibold mt-2">
              Got big goals? We’re here to help you hit them! Drop us a message,
              and let’s work together to take your business to the next level.
            </p>
          </div>

          {/* Contact Form */}
          <div className="p-6 sm:p-8 w-full rounded-lg border-2 border-violet-200 bg-white shadow-xl">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:border-indigo-500"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />

              <input
                type="email"
                name="email"
                placeholder="email@example.com"
                required
                className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:border-indigo-500"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <input
                type="tel"
                name="phone"
                placeholder="+91 99999 99999"
                required
                className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:border-indigo-500"
              />
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
              />

              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:border-indigo-500"
                rows={4}
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              {/* Google reCAPTCHA */}
              <ReCAPTCHA
                sitekey="6LduyJQqAAAAAFUf1YGFhoKAppjYnpeBhR2rYUQr"
                onChange={handleCaptchaChange}
              />

              {/* Conditional Submit Button */}
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
                <p className="text-green-600 text-lg mt-4">
                  Thanks for your message! We’ll get back to you shortly.
                </p>
              )}
            </form>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Map */}
          <div
            className="overflow-hidden shadow-lg border border-gray-200"
            style={{ width: "100%", height: "555px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d153657.29575596304!2d79.71871412674747!3d12.015441634909148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5367b9d4c5c56d%3A0x606d45d5c7ec5c42!2sYuvabe!5e1!3m2!1sen!2sin!4v1732948683259!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              className="rounded-t-lg"
            ></iframe>
          </div>

          {/* Address */}
          <motion.div
            className="bg-white shadow-lg border border-gray-300 p-6 space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 text-[#393B2D] font-secondary font-Bold">
              <FiMail className="text-[#757575]" />
              <span>sales@yuvabe.com</span>
            </div>
            <div className="flex items-center space-x-3 text-[#393B2D] font-primary font-medium mt-2">
              <FiPhone className="text-[#757575]" />
              <span>+91 78768 77364</span>
            </div>
            <div className="flex items-center space-x-3 text-[#393B2D] font-primary font-medium mt-2">
              <FiMapPin className="text-[#757575]" />
              <span>
                Yuvabe, Saracon campus, Kottakarai Road, Auroville, Tamil Nadu
                605009
              </span>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default Contact;
