"use client";
import { renderToString } from "react-dom/server";
import { useState, useEffect, useRef } from "react";
import Current_Resume from "@/components/current_resume";
import FutureResume from "@/components/future_resume";
// import { exportComponentAsPNG } from "react-component-export-image";

// const ExportButton = dynamic(() => import("@/components/ExportButton"), {
//   ssr: false,
// });
export default function Home() {
  const [showFuture, setShowFuture] = useState(false);

  const email_current = "loosmore@usc.edu";

  const future_email = "stan@ode.com";

  const skills_current = [
    { name: "Speaking", level: 94 },
    { name: "ML", level: 90 },
    { name: "Full-Stack", level: 85 },
    { name: "Rizz", level: 77 },
  ];

  const skills_future = [
    { name: "Agency", level: 96 },
    { name: "Reasearch", level: 92 },
    { name: "Sales", level: 85 },
    { name: "Locked", level: 77 },
  ];

  const work_current = [
    {
      title: "Perplexity",
      role: "Campus Strategest",
      date: "September 2024 - Present",
      achievements: [
        "Managed on-campus marketing campaign, increasing app downloads by 200%",
        "Led adoption efforts, resulting in thousands of new USC student users",
      ],
    },
    {
      title: "Microsoft Gaming, Redmond, WA",
      role: "Technical PM & Research Intern",
      date: "June 2024 - August 2024",
      achievements: [
        "Built full stack app for real-time game state updates, 10% more efficient; devised AI strategy for 3 studios",
        "Formalized documentation for 3 full stack prototypes, improving cross-team collaboration and knowledge transfer",
      ],
    },
    {
      title: "AT Kearney (Product Renewal Excellence Lab), Chicago, IL",
      role: "Analyst",
      date: "May 2024 - June 2024",
      achievements: [
        "Spearheaded Design to Value project for Billion Dollar Private label",
        "Designed three products all with an estimated 5% cost reduction while improving core features",
      ],
    },
    {
      title:
        "USC's CAIS++ (Center for AI in Society Student Branch), Los Angeles, CA",
      role: "Applications Advisor/Researcher",
      date: "September 2023 - Present",
      achievements: [
        "Received Three invitations to present poster at Show-CAIS (Graduate CAIS conference)",
        "Teach and mentor students how to go from problem space to building a ML application",
      ],
    },
    {
      title: "T-Mobile US, Bellevue, WA",
      role: "Office of the Chief Digital Officer, Operations Intern",
      date: "June 2023 - August 2023",
      achievements: [
        "Developed promotion packet software for 26 job families, creating 45 packets and streamlining the process",
        "Optimized team workflow by crafting 50+ OKRs for leadership and creating a RACI matrix for 12 team members",
      ],
    },
    {
      title: "Foligy LLC, Kirkland, WA",
      role: "Operator",
      date: "November 2021 - June 2023",
      achievements: [
        "Ideated, designed, and prototyped a line of sustainable laser cut wood office/desk organizers (13 different products)",
        "Supplied hundreds of products through B2B & B2C channels reducing plastic usage, creating thousands of dollars in value",
      ],
    },
  ];

  const work_future = [
    {
      title: "Ode, Palo Alto",
      role: "Founder",
      date: "July 2025 - Present",
      achievements: [
        "Founded deep tech startup focused on lightweight AI for edge devices, securing $5M in seed funding",
        "Established partnerships with 3 major IoT manufacturers, integrating Ode's technology into their product lines",
      ],
    },
    {
      title: "Information Institue of Teachnology, Los Angeles",
      role: "Reasearcher",
      date: "October 2024 - Present",
      achievements: [
        "Published 5 papers in top-tier AI conferences (NeurIPS, ICML, ICLR) on advanced embedding techniques",
        "Developed novel approach to latent space statistical hypervolumes, improving model interpretability by 30%",
        "Created state-of-the-art hypervolume-based decoding method for synonym sampling, enhancing NLP model performance by 15%",
      ],
    },
    {
      title: "Amazon AI, Seattle, WA",
      role: "AI Research Intern",
      date: "June 2025 - August 2025",
      achievements: [
        "Developed novel machine learning models for improving product recommendations",
        "Collaborated with senior researchers on large language model fine-tuning for e-commerce applications",
        "Presented research findings to leadership, resulting in potential integration into Amazon's recommendation system",
      ],
    },
    {
      title: "Seed Startup, Palo Alto",
      role: "Growth/Operations",
      date: "December 2024 - June 2025",
      achievements: [
        "Led successful product launch, achieving 100,000 users within first month through viral marketing strategies",
        "Scaled startup from 0 to $10M ARR in 6 months, implementing efficient B2B and B2C sales funnels",
      ],
    },
    {
      title: "Microsoft Gaming, Redmond, WA",
      role: "Technical PM & Research Intern",
      date: "June 2024 - August 2024",
      achievements: [
        "Built full stack app about real-time deterministic game state updates ~10 more efficient than previous prototypes",
        "Devised strategy for AI implementation at 3 different studios (including 343 games creators of Halo)",
        "Formalized documentation of 3 different full stack prototypes",
      ],
    },
  ];

  const projects_current = [
    "Patent Pending: Automatic furniture deployment system (20-page PPA filed Feb 2023)",
    "Iovine & Young Venture Showcase Winner: $10k grant, first freshman to win",
    "Eagle Scout: Held 3 elected positions over 2 years",
  ];

  const projects_future = [
    "Open Source Contribution: Created widely-adopted framework for hypervolume-based NLP models",
    "TED Talk: 'The Future of AI: From Cloud to Edge' - over 5 million views",
    "Advisory Board Member: AI Ethics Committee for major tech company",
    "Patent Granted: Revolutionary edge computing architecture for AI-powered IoT devices",
  ];

  const toggleView = () => {
    setShowFuture(!showFuture);
  };

  const currentData = {
    skills: skills_current,
    work: work_current,
    projects: projects_current,
    email: email_current,
  };

  const futureData = {
    skills: skills_future,
    work: work_future,
    projects: projects_future,
    email: future_email,
  };

  const resumeRef = useRef();

  return (
    <div className="relative min-h-screen">
      <div ref={resumeRef}>
        {(showFuture && (
          <FutureResume {...(showFuture ? futureData : currentData)} />
        )) || <Current_Resume {...(showFuture ? futureData : currentData)} />}
      </div>
      <button
        onClick={toggleView}
        className="fixed left-4 bottom-4 text-neutral-500 border font-bold py-2 px-4 rounded"
      >
        {showFuture ? "Current" : "Future"}
      </button>
      {/* {isClient && <ExportButton resumeRef={resumeRef} />} */}
    </div>
  );
}
