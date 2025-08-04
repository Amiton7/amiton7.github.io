import React from "react";

import profilePic from "./profile.jpg";
const cvLink = "https://your-link-to-cv.pdf"; // Optional: Link to your CV
const email = "bendkhale.amit@gmail.com"; // Replace with your email

function Section({ title, children }) {
  return (
    <section className="py-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">{title}</h2>
      {children}
      <div className="mt-8 border-t border-slate-200" />
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f6f8fa] font-sans text-slate-800">
      <div className="max-w-3xl mx-auto px-3 sm:px-6 pt-12 pb-10">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-center gap-7 mb-12">
          <img
            src={profilePic}
            alt="Amit Bendkhale"
            className="w-32 h-40 object-cover rounded-xl"
            style={{ background: "#e3e7ed" }}
          />
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">
              Amit Bendkhale
            </h1>
            <div className="text-slate-500 mb-2">
              Research Engineer @ Convrse AI
            </div>
            <div className="flex gap-6 text-sky-700 text-base mt-3 mb-2">
              <a
                href="https://www.linkedin.com/in/amit-bendkhale/"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Amiton7"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {/* <a
                href={`mailto:${email}`}
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a> */}
              {/* <a
                href={cvLink}
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                CV
              </a> */}
            </div>
          </div>
        </header>

        <div className="border-t border-slate-200 mb-8" />

        {/* Updates */}
        <Section title="Updates">
          <ul className="space-y-2">
            <li>
              <span className="font-medium text-slate-500 text-xs">8 June 2025:</span>
              <span className="ml-2 text-slate-700">
                Attended Games-Based Learning Virtual Conference (GBLVC) 2025.
              </span>
            </li>
            <li>
              <span className="font-medium text-slate-500 text-xs">19 May 2025:</span>
              <span className="ml-2 text-slate-700">
                Enrolled in Stanford Online XCS236: Deep Generative Models.
              </span>
            </li>
            <li>
              <span className="font-medium text-slate-500 text-xs">5 May 2025:</span>
              <span className="ml-2 text-slate-700">
                Started research on cross-modal injection attacks in LVLMs.
              </span>
            </li>
          </ul>
        </Section>

        {/* Research */}
        <Section title="Research">
          <ul className="space-y-3">
            <li>
              <div className="font-semibold text-slate-900">
                Survey: Diffusion of Thought vs Chain of Thought for Math Reasoning
              </div>
              <div className="text-slate-500 text-xs">Ongoing | Independent</div>
              <div className="text-slate-700">
                Documenting iterative refinement (DoT, DCoLT), explaining mechanics and comparing approaches.
              </div>
            </li>
            <li>
              <div className="font-semibold text-slate-900">
                Stealthy Cross-Modal Prompt Injection Attack
              </div>
              <div className="text-slate-500 text-xs">Ongoing | Vizuara AI</div>
              <div className="text-slate-700">
                Identifying critical blind spots in LVLMs safety. Proposing cross-modal prompt injection techniques to bypass safety filters.
              </div>
            </li>
          </ul>
        </Section>

        {/* Service & Activities */}
        <Section title="Community">
          <ul className="space-y-3">
            <li>
              <span className="font-semibold text-slate-900">
                Founder/Host, Book Reading Club @ TWIML
              </span>
              <span className="ml-2 text-slate-500 text-xs">2024-2025</span>
              <div className="text-slate-700">
                Organized reading sessions for "Deep Learning" (Goodfellow et al.), built an open community around ML topics.
              </div>
            </li>
            <li>
              <span className="font-semibold text-slate-900">
                Founding Vice President, IIT Roorkee Chess Club
              </span>
              <span className="ml-2 text-slate-500 text-xs">2018-2019</span>
              <div className="text-slate-700">
                Co-founded IIT Roorkee Chess Club. Tactics coach for National Sports Organisation students.
              </div>
            </li>
            <li>
              <span className="font-semibold text-slate-900">
                Community Service, Shahpur Village, Roorkee
              </span>
              <span className="ml-2 text-slate-500 text-xs">2016-2017</span>
              <div className="text-slate-700">
                National Service Scheme: awareness drives, demographic data collection.
              </div>
            </li>
          </ul>
        </Section>

        {/* Blogs/ Projects */}
        <Section title="Blogs & Resources">
          <ul className="space-y-3">
            <li>
              <a
                href="https://amiton7.github.io/generative-ai-flowchart/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-900 hover:text-sky-700"
              >
                Foundational Generative AI Models: A Visual Comparison
              </a>
              <span className="ml-2 text-slate-500 text-xs">2025</span>
              <div className="text-slate-700">
                Built a visualization chart for foundational generative models, to aid ongoing education and research.
              </div>
            </li>
          </ul>
          <div className="text-center text-slate-500 italic py-8">
            I love to write intuitive explanations of scientific works and share any interesting scientific observations I encounter.
          </div>
        </Section>

        {/* Footer */}
        <footer className="text-center pt-6 text-slate-400 text-xs">
          &copy; 2025 Amit Bendkhale &middot; Last updated: Aug 2025
        </footer>
      </div>
    </div>
  );
}
