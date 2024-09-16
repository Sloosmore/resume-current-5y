"use client";
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

export default function Current_Resume({ skills, work, projects, email }) {
  const email_ad = email ? email : "";
  const workItems = Array.isArray(work) ? work : [];
  const projectItems = Array.isArray(projects) ? projects : [];
  const skillsItems = Array.isArray(skills) ? skills : [];

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div
        id="resume-content"
        className="w-full max-w-[8.5in] h-[11in] bg-white shadow-2xl mb-10  overflow-hidden" //rounded-lg
      >
        <header className="bg-gradient-to-r from-blue-600 to-pink-600 text-white py-4 px-7">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Stan Loosmore</h1>
              <div className="text-[12px] mt-2">
                <p>
                  <span>(206) 372-0327</span>
                  <span className="mx-2">•</span>
                  <span>{email_ad}</span>
                </p>
              </div>
            </div>
            <Image
              src="/images/headshot.jpg"
              alt="Stan Loosmore headshot"
              width={80}
              height={80}
              className="rounded-full object-cover border-2 border-white shadow-lg"
            />
          </div>
        </header>

        <main className="px-7 py-5 space-y-3 text-sm">
          <div className="flex space-x-6 mt-1">
            <section className="w-1/2">
              <h2 className="text-lg font-semibold mb-3 text-subtitle border-b border-bottom_border pb-1">
                Education
              </h2>
              <div className="pl-3 border-l-2 border-left_border">
                <h3 className="font-semibold">
                  University of Southern California, Los Angeles, CA
                </h3>
                <p className="text-xs mt-1">
                  B.S. Arts, Technology, and the Business of Innovation
                </p>
                <p className="text-xs mt-1">
                  August 2023 - May 2027 • GPA: 3.96/4
                </p>
              </div>
            </section>
            <section className="w-1/2">
              <h2 className="text-lg font-semibold mb-3 text-subtitle border-b border-bottom_border pb-1">
                Skills
              </h2>
              <div className="h-24">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={skillsItems}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
                  >
                    <XAxis type="number" domain={[0, 100]} hide />
                    <YAxis
                      dataKey="name"
                      type="category"
                      axisLine={false}
                      tickLine={false}
                      width={50}
                      tick={{ fontSize: 10 }}
                    />
                    <Tooltip />
                    <Bar dataKey="level" fill="#3B82F6" barSize={6}>
                      <LabelList
                        dataKey="level"
                        position="right"
                        formatter={(value) => `${value}%`}
                        fontSize={10}
                      />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </section>
          </div>

          <section>
            <h2 className="text-lg font-semibold mb-3 text-subtitle border-b border-bottom_border pb-1">
              Work Experience
            </h2>
            <div className="space-y-4">
              {workItems.map((job, index) => (
                <div key={index} className="pl-3 border-l-2 border-left_border">
                  <h3 className="font-semibold">{job.title}</h3>
                  <p className="text-xs mt-1">
                    {job.role} | {job.date}
                  </p>
                  <ul className="list-disc list-inside text-[11px] mt-1 space-y-.5">
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <div className="flex space-x-6">
            <section className="">
              <h2 className="text-lg font-semibold mb-3 text-subtitle border-b border-bottom_border pb-1">
                Projects & Accomplishments
              </h2>
              <div className="pl-3 border-l-2 border-left_border space-y-2">
                {projectItems.map((item, index) => (
                  <p key={index} className="text-xs">
                    {item}
                  </p>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
