import React, { useState } from "react";

const jobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    location: "Remote, US",
    type: "Full-Time",
    department: "Engineering",
    description:
      "Lead critical software projects using modern frameworks, mentor junior engineers, and deliver high-quality code.",
  },
  {
    id: 2,
    title: "QA Automation Engineer",
    location: "Remote",
    type: "Contract",
    department: "Quality",
    description:
      "Build and maintain robust automation frameworks for our enterprise platforms.",
  },
  {
    id: 3,
    title: "Project Manager",
    location: "New York, US",
    type: "Full-Time",
    department: "Operations",
    description:
      "Coordinate client projects, manage timelines, and deliver exceptional results with our cross-functional teams.",
  },
];

const departments = ["All", "Engineering", "Quality", "Operations"];

export default function CareersPage() {
  const [activeDept, setActiveDept] = useState("All");
  const [selectedJob, setSelectedJob] = useState(null);

  const filteredJobs =
    activeDept === "All"
      ? jobs
      : jobs.filter((job) => job.department === activeDept);

  return (
    <section className="w-full min-h-screen bg-[#f9fafb] flex flex-col">
      <div
        className="bg-[#0c2d3c] text-center"
        style={{ paddingTop: "10rem", paddingBottom: "6rem" }}
      >
        <p className="uppercase tracking-widest text-sm text-gray-200">
          Join Our Team
        </p>
        <h1 className="text-white text-4xl md:text-5xl font-bold mt-4">
          Careers at QvalFocus
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto mt-4 px-4">
          Discover open roles and become part of our journey.
        </p>
      </div>

      <div className="max-w-6xl w-full mx-auto px-8 mt-10">
        <div className="flex gap-4 flex-wrap justify-center mb-10">
          {departments.map((dept) => (
            <button
              key={dept}
              className={`px-5 py-2 rounded-full border ${
                activeDept === dept
                  ? "bg-[#0c2d3c] text-white"
                  : "bg-white text-[#0c2d3c] border-[#0c2d3c]"
              } transition`}
              onClick={() => setActiveDept(dept)}
            >
              {dept}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{job.location}</p>
                <p className="text-sm text-gray-600 mb-4">{job.type}</p>
                <p className="text-gray-700">
                  {job.description.substring(0, 70)}...
                </p>
              </div>
              <div className="mt-6">
                <button
                  onClick={() => setSelectedJob(job)}
                  className="inline-block px-6 py-2 bg-[#0c2d3c] text-white rounded-full hover:bg-[#164055] transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 overflow-y-auto">
          <div className="bg-white p-6 rounded-2xl w-full max-w-xl relative mt-10 mb-10">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-2">{selectedJob.title}</h2>
            <p className="text-sm text-gray-600 mb-1">
              {selectedJob.location} | {selectedJob.type}
            </p>
            <p className="mb-4">{selectedJob.description}</p>

            <form
              action="https://formspree.io/f/xjkobook"
              method="POST"
              encType="multipart/form-data"
              className="space-y-4"
            >
              <input type="hidden" name="Job Title" value={selectedJob.title} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="First Name"
                  placeholder="First Name"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none"
                />
                <input
                  type="text"
                  name="Last Name"
                  placeholder="Last Name"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="Email"
                  placeholder="Your Email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none"
                />
                <input
                  type="tel"
                  name="Phone"
                  placeholder="Your Phone"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none"
                />
              </div>
              <textarea
                name="Message"
                placeholder="Why are you a good fit?"
                rows="3"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none"
              ></textarea>
              <input
                type="file"
                name="Resume"
                accept=".pdf,.doc,.docx"
                required
                className="w-full"
              />
              <button
                type="submit"
                className="w-full bg-[#0c2d3c] text-white py-3 rounded-lg font-semibold hover:bg-[#164055] transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="w-full bg-[#0c2d3c] text-white py-20 mt-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Life at QvalFocus
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            We value collaboration, growth, and success — join a workplace that
            empowers you.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-white text-[#0c2d3c] rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
