import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import Image from "next/image";

const FutureResume = ({ skills, work, projects, email }) => {
  const interests = [
    "Quantum Computing",
    "Embeddings",
    "Space Exploration",
    "Neuroscience",
  ];
  const education = {
    school: "University of Southern California",
    degree: "B.S. Arts, Technology, and the Business of Innovation",
    date: "August 2023 - May 2027",
    gpa: "3.96/4",
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="w-[8.5in] h-[11in] bg-white shadow-2xl overflow-hidden flex p-10 space-x-12">
        {/* Left Column */}
        <div className="w-1/5  space-y-4">
          <Image
            src="/images/headshot.jpg"
            alt="Stan Loosmore headshot"
            width={120}
            height={120}
            className="rounded-full object-cover border-2 mx-auto"
          />

          <section>
            <h2 className="text-lg font-semibold mb-2 border-b border-green-200 pb-1 text-green-800">
              Contact
            </h2>
            <p className="text-xs">Seattle, WA</p>
            <p className="text-xs">{email}</p>
            <p className="text-xs">(206) 372-0327</p>
            {/* <p className="text-xs">linkedin.com/in/stanloosmore</p>
            <p className="text-xs">github.com/stanloosmore</p> */}
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 border-b border-green-200 pb-1 text-green-800">
              Interests
            </h2>
            <ul className="list-disc list-inside">
              {interests.map((interest, index) => (
                <li key={index} className="text-xs">
                  {interest}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 border-b border-green-200 pb-1 text-green-800">
              Education
            </h2>
            <h3 className="text-sm font-semibold">{education.school}</h3>
            <p className="text-xs">{education.degree}</p>
            <p className="text-xs">{education.date}</p>
            <p className="text-xs">GPA: {education.gpa}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2 border-b border-green-200 pb-1 text-green-800">
              Skills
            </h2>
            <div className="h-28 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={skills}
                  margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
                >
                  <XAxis type="number" domain={[0, 100]} hide />
                  <Bar dataKey="level" fill="#10B981" barSize={16}>
                    <LabelList
                      dataKey="name"
                      position="insideLeft"
                      fill="#FFFFFF"
                      fontSize={8}
                    />
                    <LabelList
                      dataKey="level"
                      position="right"
                      formatter={(value) => `${value}%`}
                      fill="#000000"
                      fontSize={8}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="w-4/5">
          <header className="mb-4 h-[120px] flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-2 text-green-800">
              Stan Loosmore
            </h1>
            {/* <p className="text-sm">{email} | (206) 372-0327</p> */}
            <p className="text-sm">Reasearcher | Entrepreneur </p>
          </header>

          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2 border-b border-green-200 pb-1 text-green-800">
              Experience
            </h2>
            {work.map((job, index) => (
              <div key={index} className="mb-3 ms-2">
                <h3 className="text-sm font-semibold">{job.title}</h3>
                <p className="text-xs mb-1">
                  {job.role} | {job.date}
                </p>
                <ul className="list-disc list-inside">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="text-xs mb-1">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 border-b border-green-200 pb-1 text-green-800">
              Projects & Achievements
            </h2>
            <ul className="list-disc list-inside">
              {projects.map((project, index) => (
                <li key={index} className="text-xs mb-1 ms-2">
                  {project}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FutureResume;
