"use client";

import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { BsArrowUpRightCircle } from "react-icons/bs";
import Link from "next/link";
import { jobs, Job } from "@/data/jobs";

export default function Careers() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All Projects");

  const filters: string[] = [
    "All Projects",
    "Design & Marketing",
    "AI/ML & Development",
    "Analytics & Management",
    "Sales & Business Development",
  ];

  const filteredJobs =
    selectedFilter === "All Projects"
      ? jobs
      : jobs.filter((job) => job.category === selectedFilter);

  const activeJobs = filteredJobs.filter((job) => job.status === "active");
  const closedJobs = filteredJobs.filter((job) => job.status === "closed");

  return (
    <>
      <Head>
        <title>Careers at Yuvabe</title>
        <meta
          name="description"
          content="Join our team and create, collaborate, and make an impact with us at Yuvabe."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-r from-[#ffffff] to-[#ffffff] via-[#d9d0df]/20 p-6 md:p-10">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-medium text-[#371B34]">
            Join Our Incredible Team
          </h1>
          <p className="text-lg md:text-xl text-[#5829C7] mt-2 font-secondary font-semibold">
            Create, Collaborate, and Make an Impact with Us
          </p>
        </header>

        {/* Filters */}
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center mb-6 mx-2 md:mx-24">
          <div className="grid grid-cols-2 gap-2 md:flex md:space-x-2 flex-wrap justify-end w-full">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1.5 rounded-full text-sm md:text-base font-medium transition-colors ${
                  selectedFilter === filter
                    ? "bg-gradient-to-r from-[#5829c7] to-[#5829c7]/20 via-[#5829c7]/80 text-white"
                    : "bg-white border border-gray-400 text-gray-600"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center bg-[#eae4f8] border-2 border-[#5829c7] p-4 rounded-lg mb-8 mx-4 md:mx-8 lg:mx-24">
          {/* Left Section */}
          <div className="mb-4 md:mb-0 w-full md:w-2/3">
            <p className="text-[#5829c7] font-semibold mb-1 font-primary">
              How To Apply?
            </p>
            <p className="text-black text-sm md:text-base font-secondary font-medium">
              If you&apos;re interested in a role and are willing to commit to
              staying in Auroville for a minimum of 12 months
            </p>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/3 text-left md:text-right">
            <Link
              href="mailto:info@yuvabe.com"
              className="text-[#5829c7] font-semibold text-sm md:text-lg hover:underline font-primary"
            >
              info@yuvabe.com
            </Link>
            <p className="text-[#8462D5] text-sm md:text-base font-secondary font-medium">
              Share Your CV, Portfolio, and a Cover Letter
            </p>
          </div>
        </div>

        {/* Active Jobs */}
        {activeJobs.length > 0 && (
          <section className="space-y-4 px-2 md:px-8 lg:px-24 mb-10">
            <h2 className="text-2xl font-semibold text-[#371B34] mb-4">
              Open Positions
            </h2>
            {activeJobs.map((job, index) => (
              <AccordionItem key={index} job={job} />
            ))}
          </section>
        )}

        {/* Closed Jobs */}
        {closedJobs.length > 0 && (
          <section className="space-y-4 px-2 md:px-8 lg:px-24 opacity-70">
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">
              Closed Positions
            </h2>
            {closedJobs.map((job, index) => (
              <AccordionItem key={index} job={job} closed />
            ))}
          </section>
        )}
      </div>
    </>
  );
}

type AccordionItemProps = {
  job: Job;
  closed?: boolean;
};

function AccordionItem({ job, closed = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`p-4 md:p-6 rounded-lg shadow-md transition-all duration-300 ${
        isOpen ? "bg-gradient-to-br from-[#5829C7] to-[#5829C7]/60" : "bg-white"
      } ${closed ? "border border-gray-300 bg-gray-100" : ""}`}
    >
      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => !closed && setIsOpen(!isOpen)}
      >
        <div className="flex-1 min-w-[200px] mb-2 md:mb-0">
          <p
            className={`${
              isOpen
                ? "text-white"
                : closed
                ? "text-gray-500"
                : "text-violet-700"
            } text-sm font-medium`}
          >
            {job.category}
          </p>
          <h3
            className={`text-lg md:text-2xl font-semibold mt-2 ${
              isOpen
                ? "text-[#FFD53E]"
                : closed
                ? "text-gray-500 line-through"
                : "text-gray-900"
            }`}
          >
            {job.title}
          </h3>
        </div>
        <div className="text-end md:text-start">
          <BsArrowUpRightCircle
            className={`text-lg md:text-2xl ${
              closed
                ? "text-gray-400"
                : isOpen
                ? "text-[#FFCA2D]"
                : "text-[#757575]"
            }`}
          />
          <p
            className={`text-xs md:text-sm mt-1 ${
              closed
                ? "text-gray-400"
                : isOpen
                ? "text-[#FFCA2D]"
                : "text-[#757575]"
            }`}
          >
            Minimum Experience
          </p>
          <p
            className={`font-semibold ${
              closed
                ? "text-gray-400"
                : isOpen
                ? "text-[#FFCA2D]"
                : "text-[#5829C7]"
            }`}
          >
            {job.experience}
          </p>
        </div>
      </div>

      {/* Expanded view only for active jobs */}
      {!closed && isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
          className="mt-6"
        >
          <p className="text-white mb-4 md:mb-6 tracking-wide text-sm md:text-base font-secondary font-medium">
            <span className="font-semibold text-[#FFCA2D] mb-2 block">
              Description:
            </span>
            {job.description}
          </p>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3 space-y-4 md:space-y-6 font-secondary font-medium">
              <div>
                <p className="font-semibold text-[#FFCA2D] mb-2">
                  Key Responsibilities:
                </p>
                <ul className="list-disc list-inside text-white ml-4">
                  {job.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[#FFCA2D] mb-2">Benefits:</p>
                <ul className="list-disc list-inside text-white ml-4">
                  {job.benefits.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:w-1/3 font-secondary font-medium">
              <p className="font-semibold text-[#FFCA2D] mb-2">Requirements:</p>
              <ul className="list-disc list-inside text-white ml-4">
                {job.requirements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
