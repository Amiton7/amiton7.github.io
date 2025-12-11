import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import profilePic from "./profile.jpg";

const cvLink = "/cv.pdf";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Research", to: "/research" },
  { label: "Teaching & Service", to: "/community" },
  { label: "Blog", to: "/blog" },
  { label: "Fun", to: "/fun" },
];

function Section({ title, children }) {
  return (
    <section className="py-8 border-b border-slate-200 last:border-b-0">
      <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-4">
        {title}
      </h2>
      <div className="space-y-3 text-sm sm:text-base text-slate-700">
        {children}
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      {/* Intro */}
      <section className="pt-8 pb-8 border-b border-slate-200">
        <div className="flex flex-col sm:flex-row items-start gap-7 mb-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2 tracking-tight">
              Amit Bendkhale
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mb-2">
              Research Engineer II @ Convrse AI
            </p>
            <p className="text-sm sm:text-base text-slate-700 mb-4">
              A geometry-first person, constantly fascinated by the mathematics behind geometric 
              reasoning (its like a 3D version of playing blindfold chess).
               Currently works at the intersection of computer graphics and artificial
              intelligence, specifically text-to-3D architectures. Loves turning a curious 'why' into a practical solution and then figuring out 'why not'.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href="https://www.linkedin.com/in/amit-bendkhale/"
                className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="h-4 w-4 text-[#0A66C2]" />
              </a>
              <a
                href="https://github.com/Amiton7"
                className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="h-4 w-4 text-black" />
              </a>
              {cvLink && (
                <a
                  href={cvLink}
                  className="hover:underline text-slate-700 hover:text-slate-900"
                  target="_blank"
                  rel="noreferrer"
                >
                  CV
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="py-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-4">
          News &amp; Updates
        </h2>
        <ul className="space-y-4 text-sm sm:text-base">
          <li className="flex gap-3 items-start">
            <span className="mt-0.5 text-lg" aria-hidden="true">
              🎉
            </span>
            <div>
              <div className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wide">
                20 Nov 2025
              </div>
              <div className="text-slate-700">
                <span className="font-medium">
                  Tri-Bench: Stress-Testing VLM Reliability on Spatial
                  Reasoning under Camera Tilt and Object Interference
                </span>{" "}
                accepted at AAAI 2026 TrustAgent workshop.
              </div>
            </div>
          </li>
          <li className="flex gap-3 items-start">
            <span className="mt-0.5 text-lg" aria-hidden="true">
              🎓
            </span>
            <div>
              <div className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wide">
                15 Aug 2025
              </div>
              <div className="text-slate-700">
                Attended the 4th Neuro-Symbolic AI Summer School organized by
                Centaur AI Institute.
              </div>
            </div>
          </li>
          <li className="flex gap-3 items-start">
            <span className="mt-0.5 text-lg" aria-hidden="true">
              🎓
            </span>
            <div>
              <div className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wide">
                10 Aug 2025
              </div>
              <div className="text-slate-700">
                Attended the Oxford Machine Learning Summer School on
                Representation Learning and Generative AI.
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}

function Research() {
  const [collabFilter, setCollabFilter] = useState("");
  const [areaFilter, setAreaFilter] = useState("");

  const AREA_LABELS = {
    geometry: "Geometry",
    ai: "AI",
    education: "Education",
  };

  const projects = [
    {
      id: "text3d",
      year: "2025",
      org: "Independent",
      areas: ["geometry", "ai"],
      title: "Trustworthy Text-to-3D Generation",
      description:
        "Evaluating text-to-3D architectures, on the basis of geometric consistency in latent representations.",
      kind: "independent",
      collaborators: [],
      linkHref: "",
      linkLabel: "",
    },
    {
      id: "vlm-jailbreak",
      year: "2025",
      org: "Vizuara AI",
      areas: ["ai"],
      title: "Single-shot Vision-only Jailbreaks through Phonetic Cues",
      description:
        "Designed single-image, text-free jailbreak for vision–language models using iconification and phonetic cues, under the mentorship of Dr. Raj Dandekar. Vision-only jailbreaks tend to give rise to 'unintentional' harm in cases of ambiguity.",
      kind: "collab",
      collaborators: ["Dr. Raj Dandekar"],
      linkHref: "",
      linkLabel: "",
    },
    {
      id: "mesh-decimation",
      year: "2024",
      org: "Convrse AI",
      areas: ["geometry", "ai"],
      title: "GNN-based 3D Mesh Decimation",
      description:
        "Built a GNN-based mesh decimation algorithm that learns vertex weights for quadric error metrics, so as to preserve structural accuracy in extreme decimation.",
      kind: "collab",
      collaborators: [],
      linkHref: "",
      linkLabel: "",
    },
    {
      id: "hku-teeth",
      year: "2019",
      org: "The University of Hong Kong",
      areas: ["geometry", "ai"],
      title: "Instance Segmentation of Dental Point Clouds",
      description:
        "Implemented PointNet++ and Mask R-CNN for instance segmentation of 3D point clouds representing human teeth, under the supervision of Prof. Wenping Wang.",
      kind: "collab",
      collaborators: ["Prof. Wenping Wang"],
      linkHref: "",
      linkLabel: "",
    },
    {
      id: "cmi-geometry",
      year: "2018",
      org: "Chennai Mathematical Institute",
      areas: ["geometry"],
      title: "Optimal UAV Path Traversal on Large Agricultural Land",
      description:
        "Designed and implemented optimal UAV path traversal algorithm for large agricultural areas using polygon decomposition and multi-UAV scheduling, under the co-supervision of Prof. Prajakta Nimbhorkar and Prof. Kavita Sutar.",
      kind: "collab",
      collaborators: ["Prof. Prajakta Nimbhorkar", "Prof. Kavita Sutar", "Varun Ramanathan", "Ronak Chauhan"],
      linkHref: "",
      linkLabel: "",
    },
  ];

  const collaborators = Array.from(
    new Set(projects.flatMap((p) => p.collaborators))
  ).sort();

  let visibleProjects = projects;

  if (collabFilter === "independent") {
    visibleProjects = visibleProjects.filter((p) => p.kind === "independent");
  } else if (collabFilter) {
    visibleProjects = visibleProjects.filter((p) =>
      p.collaborators.includes(collabFilter)
    );
  }

  if (areaFilter) {
    visibleProjects = visibleProjects.filter((p) =>
      p.areas.includes(areaFilter)
    );
  }

  return (
    <>
      {/* Publication */}
      <Section title="Publication">
        <article className="space-y-3">
          <div className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wide">
            Workshop paper · Independent
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-slate-800">
            Tri-Bench: Stress-Testing VLM Reliability on Spatial Reasoning under
            Camera Tilt and Object Interference
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            AAAI 2026 TrustAgent Workshop, accepted on 20 Nov 2025.
          </p>
          <p className="text-sm sm:text-base text-slate-700">
            A benchmark to evaluate how robust vision–language models are to
            camera tilt and object interference when they perform spatial
            reasoning, with a focus on reliability and trustworthiness.
          </p>
         <div className="mt-1 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-600">
          <a
            href="https://arxiv.org/abs/2512.08860"
            target="_blank"
            rel="noreferrer"
            className="hover:underline underline-offset-2"
          >
            arXiv
          </a>
          <span>|</span>
          <a
            href="https://arxiv.org/pdf/2512.08860.pdf"
            target="_blank"
            rel="noreferrer"
            className="hover:underline underline-offset-2"
          >
            pdf
          </a>
          <span>|</span>
          <a
            href="https://github.com/Amiton7/Tri-Bench"
            target="_blank"
            rel="noreferrer"
            className="hover:underline underline-offset-2"
          >
            code &amp; dataset
          </a>
        </div>
        </article>
      </Section>

      {/* Selected work */}
      <Section title="Selected work">
        <div className="flex flex-wrap gap-2 mb-2 text-xs sm:text-sm">
          <select
            value={collabFilter}
            onChange={(e) => setCollabFilter(e.target.value)}
            className="border border-slate-300 rounded-md px-2 py-1 bg-white text-slate-700"
          >
            <option value="">All collaborators</option>
            <option value="independent">Independent</option>
            {collaborators.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>

          <select
            value={areaFilter}
            onChange={(e) => setAreaFilter(e.target.value)}
            className="border border-slate-300 rounded-md px-2 py-1 bg-white text-slate-700"
          >
            <option value="">All areas</option>
            <option value="geometry">Geometry</option>
            <option value="ai">AI</option>
            <option value="education">Education</option>
          </select>
        </div>

        <ul className="space-y-4 text-sm sm:text-base">
          {visibleProjects.map((project) => (
            <li key={project.id} className="space-y-1">
              <div className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wide">
                {project.year} · {project.org}
              </div>
              <h3 className="font-semibold text-slate-800">
                {project.title}
              </h3>
              {project.areas && project.areas.length > 0 && (
                <p className="text-xs text-slate-500">
                  Areas:{" "}
                  {project.areas
                    .map((area) => AREA_LABELS[area] || area)
                    .join(", ")}
                </p>
              )}
              {project.collaborators.length > 0 && (
                <p className="text-xs text-slate-500">
                  Collaborator
                  {project.collaborators.length > 1 ? "s" : ""}:{" "}
                  {project.collaborators.join(", ")}
                </p>
              )}
              <p className="text-slate-700">{project.description}</p>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-xs sm:text-sm text-slate-500">
          Other work includes projects at IIT Roorkee, Oracle, Myntra and
          Eleuther AI. Please see CV for more comprehensive list.
        </p>
      </Section>
    </>
  );
}



function Community() {
  return (
    <>
      <Section title="Teaching, community and service">
        <ul className="space-y-4 text-sm sm:text-base">
          
          {/* 2022 - Asawari Open Library */}
          <li className="space-y-1">
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-semibold text-slate-800">
                Asawari Open Library 
              </span>
              <span className="text-xs text-slate-500">Ongoing</span>
            </div>
            <p className="text-xs text-slate-500">Volunteer · Pune, India</p>
            <p className="text-slate-700">
              Built a digital catalogue and a Telegram bot for book
              recommendations with QR codes for quick manual updates. 
              The "open" library is free of cost, 24x7 available to anyone without any restrictions.
               Part of Open Library Movement.
            </p>
          </li>

          {/* Ongoing - Vidyoday Muktangan Foundation */}
          <li className="space-y-1">
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-semibold text-slate-800">
                Vidyoday Muktangan Parivar Foundation
              </span>
              <span className="text-xs text-slate-500">Ongoing</span>
            </div>
            <p className="text-xs text-slate-500">
              Visiting teacher · Kolhapur, India
            </p>
            <p className="text-slate-700">
              Teaching under-resourced students and teachers, about mathematics and AI through visual experiments and
              games.
            </p>
          </li>
          
          {/* 2025 - Games-Based Learning Virtual Conference */}
          <li className="space-y-1">
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-semibold text-slate-800">
                Games-Based Learning Virtual Conference
              </span>
              <span className="text-xs text-slate-500">2025</span>
            </div>
            <p className="text-slate-700">
              Attended GBLVC 2025 to learn how educators design and integrate
              game-based learning in classrooms, and to think about how
              generative AI can help personalize meaningful educational games.
            </p>
          </li>

          {/* 2024- TWIML Book Reading Club */}
          <li className="space-y-1">
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-semibold text-slate-800">
                Book Reading Club @ TWIML
              </span>
              <span className="text-xs text-slate-500">2024</span>
            </div>
            <p className="text-xs text-slate-500">Host</p>
            <p className="text-slate-700">
              Organized weekly online reading sessions for{" "}
              <em>Deep Learning</em> by Goodfellow et al., creating a space for
              accessible discussions in an international community of 100+ machine
              learning students/practitioners.
            </p>
          </li>

          {/* 2018 - IIT Roorkee Chess Club */}
          <li className="space-y-1">
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-semibold text-slate-800">
                IIT Roorkee Chess Club
              </span>
              <span className="text-xs text-slate-500">2018</span>
            </div>
            <p className="text-xs text-slate-500">
              Founding Vice President
            </p>
            <p className="text-slate-700">
              Cultivated the first official chess club at IIT Roorkee and
              worked as a tactics coach for National Sports Organisation
              students, teaching combinatorial insights governing the game. Bagged several inter-collegiate awards.
            </p>
          </li>

          {/* 2016 - National Service Scheme */}
          <li className="space-y-1">
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-semibold text-slate-800">
                National Service Scheme
              </span>
              <span className="text-xs text-slate-500">2016</span>
            </div>
            <p className="text-xs text-slate-500">
              Member · IIT Roorkee NSS unit
            </p>
            <p className="text-slate-700">
              Collected demographic data in Sherpur village near Roorkee and
              helped households become aware about government schemes in education and
              public health.
            </p>
          </li>
        </ul>
        <p className="mt-4 text-xs sm:text-sm text-slate-500">
          Sparsely active on some of the "AI-based teaching" Google groups.
        </p>
      </Section>
    </>
  );
}

function Blog() {
  const posts = [
    {
      id: "genai-flowchart",
      year: "2025",
      type: "AI",
      title: "Foundational Generative AI Models: A Visual Comparison",
      description:
        "A visual flowchart from that compares foundational generative model families and how they connect, with analogies to everday cooking. As 'comparison' is perhaps the root of all scientific curiosity, this flowchart might develop interests in understanding deep generative models.",
      linkHref: "https://amiton7.github.io/generative-ai-flowchart/",
      linkLabel: "View the flowchart",
    },
  ];

  return (
    <>
      <Section title="Blog & notes">
        <ul className="space-y-4 text-sm sm:text-base">
          {posts.map((post) => (
            <li key={post.id} className="space-y-1">
              <div className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wide">
                {post.year} · {post.type}
              </div>
              <h3 className="font-semibold text-slate-800">{post.title}</h3>
              <p className="text-slate-700">{post.description}</p>
              {post.linkHref && (
                <a
                  href={post.linkHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-sm text-sky-700 hover:text-sky-900"
                >
                  {post.linkLabel}
                </a>
              )}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

function Fun() {
  const artPhotos = [
    {
      src: "/pics/art/2012-1.jpg",
      year: "2012",
      title: "Sunrise Surprise",
      medium: "acrylic colours on paper",
    },
    {
      src: "/pics/art/2013-3.jpg",
      year: "2013",
      title: "Golden Bird",
      medium: "poster colours on paper",
    },
    {
      src: "/pics/art/2013-4.jpg",
      year: "2013",
      title: "A Hut on a Hill",
      medium: "poster colours on canvas",
    },
    {
      src: "/pics/art/2016-1.jpg",
      year: "2016",
      title: "Disha Patani",
      medium: "oil colours on canvas",
    },
    {
      src: "/pics/art/2017-1.jpg",
      year: "2017",
      title: "Tony Stark",
      medium: "oil colours on canvas",
    },
    {
      src: "/pics/art/2017-2.jpg",
      year: "2017",
      title: "Sonali Bendre",
      medium: "HB pencil on paper",
    },
    {
      src: "/pics/art/2017-3.jpg",
      year: "2017",
      title: "Sherlock Holmes",
      medium: "oil colour on wall",
    },
    {
      src: "/pics/art/2018-1.JPG",
      year: "2018",
      title: "3D Illusion",
      medium: "oil colours on wall",
    },
    {
      src: "/pics/art/2019-1.jpg",
      year: "2019",
      title: "Joker",
      medium: "oil colours on wall",
    },
    {
      src: "/pics/art/2022-1.jpg",
      year: "2022",
      title: "Ideas Unbounded",
      medium: "black pen on paper",
    },
  ];

  return (
    <>
      <Section title="Fun">
        <div className="space-y-6">
          {/* Art */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-800">Art</h3>
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
              {artPhotos.map((photo) => (
                <figure key={photo.src} className="flex flex-col group">
                  <div className="relative overflow-hidden rounded-xl bg-slate-100 border border-slate-200">
                    <img
                      src={photo.src}
                      alt={
                        photo.title ||
                        photo.medium ||
                        `Artwork from ${photo.year}`
                      }
                      className="w-full h-40 sm:h-48 object-contain"
                    />
                    {(photo.title || photo.medium) && (
                      <div className="pointer-events-none absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center px-3">
                        <div className="text-center">
                          {photo.title && (
                            <em className="block text-xs sm:text-sm text-slate-100 mb-1">
                              {photo.title}
                            </em>
                          )}
                          {photo.medium && (
                            <span className="block text-[11px] sm:text-xs text-slate-100/90">
                              {photo.medium}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  <figcaption className="mt-1 text-xs text-slate-500">
                    {photo.year}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-4 text-xs text-slate-400">
          Other hobbies such as music, sports, travel and reading will be added
          soon.
        </p>
      </Section>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-700 flex flex-col">
        {/* Top nav */}
        <header className="sticky top-0 z-10 border-b border-[#5e0f0f] bg-[#8c1515] text-red-50 shadow-sm">
          <div className="w-full px-4 sm:px-6 lg:px-10">
            <div className="max-w-6xl mx-auto py-4 flex items-center justify-between">
              {/* Clickable brand goes home */}
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-red-100/60">
                  <img
                    src={profilePic}
                    alt="Amit Bendkhale"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-semibold text-red-50 text-base sm:text-lg group-hover:text-white">
                  Amit Bendkhale
                </span>
              </Link>

              <nav className="flex gap-3 sm:gap-4 text-sm sm:text-base">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="px-3.5 py-2 rounded-md text-red-50 hover:bg-white/10 hover:text-white transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 w-full px-4 sm:px-6 lg:px-10">
          <div className="max-w-6xl mx-auto pt-6 pb-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/research" element={<Research />} />
              <Route path="/community" element={<Community />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/fun" element={<Fun />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-200 py-4">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} Amit Bendkhale · Last updated: Dec 2025
          </div>
        </footer>
      </div>
    </Router>
  );
}
