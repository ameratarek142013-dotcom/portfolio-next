"use client";
import dynamic from "next/dynamic";
const Hero3D = dynamic(() => import("./_components/Hero3D/Hero3D"), { ssr: false });
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiAxios,
  SiFigma,
} from "react-icons/si";
import { ArrowUpRight,Award, X , Boxes, Code2, FolderGit2, Globe, GraduationCap, HeartIcon, Mail, Menu, Phone, Route, Share2, Smartphone, User } from "lucide-react";



function GithubMark(props) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.8 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.6.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.44-2.7 5.42-5.26 5.7.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.8.55C20.21 21.39 23.5 17.09 23.5 12 23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinMark(props) {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function WhatsappMark(props) {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" {...props}>
      <path d="M12.02 2C6.5 2 2 6.5 2 12.02c0 1.77.46 3.44 1.27 4.9L2 22l5.2-1.24a10 10 0 0 0 4.82 1.23h.01c5.52 0 10.02-4.5 10.02-10.02C22.05 6.5 17.55 2 12.02 2Zm0 18.1h-.01a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.09.74.74-3.01-.19-.31a8.05 8.05 0 0 1-1.24-4.19c0-4.46 3.63-8.09 8.13-8.09 2.17 0 4.2.85 5.74 2.38a8.05 8.05 0 0 1 2.38 5.73c0 4.46-3.63 8.06-8.03 8.06Zm4.44-6.02c-.24-.12-1.43-.7-1.65-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.12.16 1.71 2.61 4.15 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.43-.58 1.63-1.15.2-.56.2-1.04.14-1.15-.06-.11-.22-.17-.46-.29Z" />
    </svg>
  );
}

function FacebookMark(props) {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" {...props}>
      <path d="M13.5 21.9v-8.4h2.83l.42-3.28h-3.25V8.1c0-.95.26-1.6 1.63-1.6h1.74V3.56A23.4 23.4 0 0 0 14.35 3.4c-2.5 0-4.22 1.53-4.22 4.33v2.41H7.29v3.28h2.84v8.4h3.37Z" />
    </svg>
  );
}

function InstagramMark(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="19"
      height="19"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const skills = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#d7c119" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "OOP", icon: Boxes, color: "#0F766E" },
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "REST APIs", icon: Globe, color: "#0F766E" },
  { name: "Axios, Fetch API", icon: SiAxios, color: "#5A29E4" },
  { name: "React Router", icon: Route, color: "#CA4245" },
  { name: "Context API", icon: Share2, color: "#61DAFB" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Responsive / mobile-first design", icon: Smartphone, color: "#A16207" },
];

const certificates = [
  {
    title: "Frontend Development Diploma",
    issuer: "Route Academy",
    year: " Sep 2026",
    image: "/projects/certificates/route-certificate.png",
    url: "/projects/certificates/route-certificate.png",
  },
];

const projects = [
  {
    title: "FreshCart",
    desc: "Responsive e-commerce application with Next.js, featuring product browsing, category and subcategory filtering, cart, wishlist, and checkout with cash and Visa (online) payment.",
    url: "https://e-commerce-olive-one-15.vercel.app/",
    githubUrl: "https://github.com/ameratarek142013-dotcom/e-commerce",
    image: "/projects/freshcart.png",
    category: "Next.js & React"
  },
  {
    title: "Tawasol",
    desc: "A responsive social media web application built with React, featuring user authentication, post creation and sharing, likes, comments and replies, and user profiles. Integrated REST APIs to handle authentication and social interactions, with an interactive UI.",
    url: "https://tawasol-roan.vercel.app/",
    githubUrl: "https://github.com/ameratarek142013-dotcom/Tawasol",
    image: "/projects/tawasol.png",
    category: "Next.js & React"
  },
  {
    title: "Adasa",
    desc: "Interactive web experience built with React and Three.js, exploring 3D elements in the browser.",
    url: "https://adasa-react-three.vercel.app/",
    githubUrl: "https://github.com/ameratarek142013-dotcom/Adasa-react",
    image: "/projects/adasa.png",
    category: "Next.js & React"
  },
  {
    title: "Quiz App",
    desc: "A quiz application with a dynamic, interactive UI and instant feedback on answers.",
    url: "https://ameratarek142013-dotcom.github.io/Quiz-App-Design/",
    githubUrl: "https://github.com/ameratarek142013-dotcom/Quiz-App-Design",
    image: "/projects/quiz.png",
    category: "JavaScript",
  },
  {
    title: "Kanban Board",
    desc: "A drag-and-drop task management board for organizing work across custom columns.",
    url: "https://ameratarek142013-dotcom.github.io/kanban-Board/",
    githubUrl: "https://github.com/ameratarek142013-dotcom/kanban-Board",
    image: "/projects/kanbann.png",
    category: "JavaScript",
  },
  {
    title: "COSMOS",
    desc: "Space Explorer Dashboard, Real-time space data from NASA & SpaceDevs.",
    url: "https://ameratarek142013-dotcom.github.io/AmeraTarek-c47-sun-tu1-4-offline-assignment11-01064494778/#",
    githubUrl: "https://github.com/ameratarek142013-dotcom/AmeraTarek-c47-sun-tu1-4-offline-assignment11-01064494778",
    image: "/projects/cosmos.png",
    category: "JavaScript",
  },
  {
    title: "NutriPlan",
    desc: "A nutrition planning interface design, focused on clear layout for meal and diet tracking.",
    url: "https://ameratarek142013-dotcom.github.io/Nutriplan---Design/",
    githubUrl: "https://github.com/ameratarek142013-dotcom/Nutriplan---Design",
    image: "/projects/nutriplan.png",
    category: "JavaScript",
  },
  {
    title: "ContactHub",
    desc: "A contact management web application for storing and organizing contact details.",
    url: "https://ameratarek142013-dotcom.github.io/contactHub/",
    githubUrl: "https://github.com/ameratarek142013-dotcom/contactHub",
    image: "/projects/contacthub.png",
    category: "JavaScript",
  },
  {
    title: "Dinner List",
    desc: "An interactive dinner / recipe list app for planning and organizing meals.",
    url: "https://ameratarek142013-dotcom.github.io/git-dinnerList/",
    githubUrl: "https://github.com/ameratarek142013-dotcom/git-dinnerList",
    image: "/projects/dinnerlist.png",
    category: "JavaScript",
  },
  {
    title: "Mini Games",
    desc: "A small collection of interactive JavaScript browser games.",
    url: "https://ameratarek142013-dotcom.github.io/git-games/",
    githubUrl: "https://github.com/ameratarek142013-dotcom/git-games",
    image: "/projects/minigames.png",
    category: "HTML & CSS", 
  },
  {
    title: "EliteHome",
    desc: "A real-estate style property listing interface, focused on clean browsing and layout.",
    url: "https://ameratarek142013-dotcom.github.io/git.eliteHome/",
    githubUrl: "https://github.com/ameratarek142013-dotcom/git.eliteHome",
    image: "/projects/elitehome.png",
    category: "HTML & CSS", 
  },
  {
    title: "Money",
    desc: "A personal finance / budget tracking interface for logging and reviewing spending.",
    url: "https://ameratarek142013-dotcom.github.io/git-money/",
    githubUrl: "https://github.com/ameratarek142013-dotcom/git-money",
    image: "/projects/money.png",
    category: "HTML & CSS", 
  },
  {
    title: "The UX Review",
    desc: "BRUTAL THOUGHTS BOLD IDEAS.",
    url: "https://ameratarek142013-dotcom.github.io/ux-blog/",
    githubUrl: "https://github.com/ameratarek142013-dotcom/ux-blog",
    image: "/projects/ux.png",
    category: "HTML & CSS", 
  },
  {
    title: "DJI Mavic",
    desc: "Experience unparalleled flight performance with 8K camera capabilities, 40-minute flight time, and advanced AI obstacle avoidance technology.",
    url: "https://ameratarek142013-dotcom.github.io/git-dji/",
    githubUrl: "https://github.com/ameratarek142013-dotcom/git-dji",
    image: "/projects/dji.png",
    category: "HTML & CSS", 
  },
  {
    title: "Fitcore GYM",
    desc: "A FitCore gym transform your body and mind at premium fitness facility.",
    url: "https://ameratarek142013-dotcom.github.io/AmeraTarek-c47-sun-tu1-4-offline-assignment2-01064494778/",
    githubUrl: "https://github.com/ameratarek142013-dotcom/AmeraTarek-c47-sun-tu1-4-offline-assignment2-01064494778",
    image: "/projects/gym.png",
    category: "HTML & CSS", 
  },
];

const tabs = ["All", "Next.js & React", "JavaScript", "HTML & CSS"];

function Reveal({ children }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

function SectionHead({ icon, label, title }) {
  return (
    <div className="mb-9">
      <div className="flex items-center gap-2 mb-6 font-mono text-lg text-[var(--theme-muted)]">
        <span className="inline-flex text-[var(--theme-primary)]">{icon}</span>
        {label}
      </div>
      <h2 className="mt-2 font-display text-[clamp(1.7rem,3.3vw,2.1rem)] font-semibold text-[var(--theme-ink)]">
        {title}
      </h2>
    </div>
  );
}

function NavLink({ href, icon, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 font-bold text-base xl:text-lg text-[var(--theme-accent-hover)] transition-all duration-200 hover:bg-[var(--theme-card)]/80 hover:text-[var(--theme-primary)] hover:shadow-sm"
    >
      {icon}
      {children}
    </a>
  );
}

function UiverseButtonContent({ children }) {
  return (
    <>
      <svg
        className="button-cosm"
        aria-hidden="true"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M243.07324,157.43945c-1.2334-1.47949-23.18847-27.34619-60.46972-41.05859-1.67579-17.97412-8.25293-34.36328-18.93653-46.87158C149.41309,52.8208,128.78027,44,104,44,54.51074,44,22.10059,88.57715,20.74512,90.4751a3.99987,3.99987,0,0,0,6.50781,4.65234C27.5625,94.6958,58.68359,52,104,52c22.36816,0,40.89648,7.85107,53.584,22.70508,8.915,10.437,14.65625,23.9541,16.65528,38.894A133.54185,133.54185,0,0,0,136,108c-25.10742,0-46.09473,6.48486-60.69434,18.75391-12.65234,10.63379-19.91015,25.39355-19.91015,40.49463a43.61545,43.61545,0,0,0,12.69336,31.21923C76.98438,207.3208,89.40234,212,104,212c23.98047,0,44.37305-9.4668,58.97461-27.37744,12.74512-15.6333,20.05566-37.145,20.05566-59.01953,0-.1128-.001-.22559-.001-.33838,33.62988,13.48486,53.62207,36.96631,53.89746,37.2959a4.00015,4.00015,0,0,0,6.14648-5.1211ZM104,204c-27.89746,0-40.60449-19.05078-40.60449-36.75146C63.39551,142.56592,86.11621,116,136,116a124.37834,124.37834,0,0,1,38.97266,6.32617q.05712,1.63038.05761,3.27686C175.03027,177.07129,139.29785,204,104,204Z" />
      </svg>
      <span className="button-label">{children}</span>
      <svg
        className="highlight"
        aria-hidden="true"
        viewBox="0 0 144.75738 77.18431"
        preserveAspectRatio="none"
      >
        <g transform="translate(-171.52826,-126.11624)">
          <g fill="none" strokeWidth="17" strokeLinecap="round" strokeMiterlimit="10">
            <path d="M180.02826,169.45123c0,0 12.65228,-25.55115 24.2441,-25.66863c6.39271,-0.06479 -5.89143,46.12943 4.90937,50.63857c10.22345,4.2681 24.14292,-52.38336 37.86455,-59.80493c3.31715,-1.79413 -5.35094,45.88889 -0.78872,58.34589c5.19371,14.18125 33.36934,-58.38221 36.43049,-56.91633c4.67078,2.23667 -0.06338,44.42744 5.22574,47.53647c6.04041,3.55065 19.87185,-20.77286 19.87185,-20.77286" />
          </g>
        </g>
      </svg>
    </>
  );
}

function FancyButtonContent({ children }) {
  return (
    <>
      <span className="top-key" aria-hidden="true" />
      <span className="fancy-text">{children}</span>
      <span className="bottom-key-1" aria-hidden="true" />
      <span className="bottom-key-2" aria-hidden="true" />
    </>
  );
}

function Btn({ href, variant = "sketch", children, className = "", ...rest }) {
  const buttonClass = variant === "sketch" ? "uiverse-button" : "fancy-button";

  return (
    <a href={href} className={`${buttonClass} ${className}`.trim()} {...rest}>
      {variant === "sketch" ? (
        <UiverseButtonContent>{children}</UiverseButtonContent>
      ) : (
        <FancyButtonContent>{children}</FancyButtonContent>
      )}
    </a>
  );
}

export default function Portfolio() {
  const [showIntro, setShowIntro] = useState(true);
  const [introExit, setIntroExit] = useState(false);
  const [startHero, setStartHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [activeTab, setActiveTab] = useState("All");
  const [showAllProjects, setShowAllProjects] = useState(false);

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);
  const visibleProjects =
    activeTab === "All" && !showAllProjects
      ? filteredProjects.slice(0, 6)
      : filteredProjects;

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIntroExit(true);
      setStartHero(true);
    }, 700);

    const removeTimer = setTimeout(() => setShowIntro(false), 1200);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  const firstName = "Amera".split("");
  const lastName = "Tarek".split("");

  return (
    <>
      <svg aria-hidden="true" className="uiverse-filters" width="0" height="0">
        <filter id="handDrawnNoise">
          <feTurbulence result="noise" numOctaves="8" baseFrequency="0.1" type="fractalNoise" />
          <feDisplacementMap yChannelSelector="G" xChannelSelector="R" scale="3" in2="noise" in="SourceGraphic" />
        </filter>
        <filter id="handDrawnNoise2">
          <feTurbulence result="noise" numOctaves="8" baseFrequency="0.1" seed="1010" type="fractalNoise" />
          <feDisplacementMap yChannelSelector="G" xChannelSelector="R" scale="3" in2="noise" in="SourceGraphic" />
        </filter>
        <filter id="handDrawnNoiset">
          <feTurbulence result="noise" numOctaves="8" baseFrequency="0.1" type="fractalNoise" />
          <feDisplacementMap yChannelSelector="G" xChannelSelector="R" scale="6" in2="noise" in="SourceGraphic" />
        </filter>
        <filter id="handDrawnNoiset2">
          <feTurbulence result="noise" numOctaves="8" baseFrequency="0.1" seed="1010" type="fractalNoise" />
          <feDisplacementMap yChannelSelector="G" xChannelSelector="R" scale="6" in2="noise" in="SourceGraphic" />
        </filter>
      </svg>
      {showIntro && (
        <div
          className={`fixed inset-0 z-[999] flex flex-col items-center justify-center overflow-hidden bg-[var(--theme-bg)] transition-all duration-500 ease-out ${
            introExit
              ? "pointer-events-none scale-105 opacity-0"
              : "scale-100 opacity-100"
          }`}
        >
          <div className="absolute inset-0 [background-image:radial-gradient(700px_450px_at_50%_45%,var(--theme-primary-glow),transparent_70%)]" />

          <h1 className="relative flex flex-wrap justify-center font-display text-[clamp(2.8rem,8.5vw,5.4rem)] font-bold text-[var(--theme-ink)]">
            {firstName.map((ch, i) => (
              <span
                key={`f-${i}`}
                className="intro-letter inline-block text-[var(--theme-subtle)]"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {ch}
              </span>
            ))}
            <span>&nbsp;</span>
            {lastName.map((ch, i) => (
              <span
                key={`l-${i}`}
                className="intro-letter inline-block text-[var(--theme-accent)]"
                style={{
                  animationDelay: `${(i + firstName.length + 1) * 0.05}s`,
                }}
              >
                {ch}
              </span>
            ))}
          </h1>

          <div
            className="intro-line relative mt-3 h-[2px] bg-gradient-to-r from-transparent via-[var(--theme-primary)] to-transparent"
            style={{
              animationDelay: `${(firstName.length + lastName.length + 2) * 0.05}s`,
            }}
          />

          <p
            className="intro-caption relative mt-4 font-mono text-lg text-[var(--theme-ink)]"
            style={{
              animationDelay: `${(firstName.length + lastName.length + 4) * 0.05}s`,
            }}
          >
            Front-End Developer
          </p>

          <style jsx>{`
            @keyframes letterIn {
              0% {
                opacity: 0;
                transform: translateY(26px);
                filter: blur(6px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
                filter: blur(0);
              }
            }
            @keyframes lineIn {
              0% {
                width: 0;
                opacity: 0;
              }
              100% {
                width: 140px;
                opacity: 1;
              }
            }
            @keyframes captionIn {
              0% {
                opacity: 0;
                transform: translateY(8px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .intro-letter {
              opacity: 0;
              animation: letterIn 0.55s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
            }
            .intro-line {
              width: 0;
              opacity: 0;
              animation: lineIn 0.5s ease-out forwards;
            }
            .intro-caption {
              opacity: 0;
              animation: captionIn 0.5s ease-out forwards;
            }
          `}</style>
        </div>
      )}

      <div className="min-h-screen bg-[var(--theme-bg)] text-lg text-[var(--theme-ink)] [background-image:radial-gradient(1100px_600px_at_85%_-10%,var(--theme-primary-wash),transparent_60%),radial-gradient(900px_500px_at_-10%_20%,var(--theme-accent-wash),transparent_55%)]">
        {/* Navigation */}
        <header className="sticky top-0 z-50 border-b border-[var(--theme-border-soft)] bg-[var(--theme-bg)]/90 backdrop-blur-md">
          <nav className="relative mx-auto flex w-[90%] items-center justify-between px-6 py-2">
            {/* Logo + Name */}
            <div className="flex items-center gap-2">
              <img
                className="h-16 w-16 object-cover rounded-full"
                src="/projects/logo.jpg"
                alt="Logo"
              />

              <a href="#" className="text-4xl font-mono font-black text-[var(--theme-subtle)]">
                mira
              </a>
            </div>

            <div className="hidden items-center gap-6 lg:flex">
              <NavLink href="#about" icon={<User size={22} />}>
                About
              </NavLink>
              <NavLink href="#skills" icon={<Code2 size={22} />}>
                Skills
              </NavLink>
              <NavLink href="#projects" icon={<FolderGit2 size={22} />}>
                Projects
              </NavLink>
              <NavLink href="#education" icon={<GraduationCap size={22} />}>
                Education
              </NavLink>
              <NavLink href="#contact" icon={<Mail size={22} />}>
                Contact
              </NavLink>
              <NavLink href="#certificates" icon={<Award size={22} />}>
  Certificates
</NavLink>
            </div>

            {/* Mobile button */}
            <button
              type="button"
              className="fancy-button fancy-menu-button lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              <span className="top-key" aria-hidden="true" />
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
              <span className="bottom-key-2" aria-hidden="true" />
            </button>

            {/* Mobile menu */}
            <div
              id="mobile-navigation"
              className={`absolute left-0 right-0 top-full overflow-hidden border-b border-[var(--theme-border)] bg-[var(--theme-surface)] shadow-lg transition-all duration-300 lg:hidden ${
                menuOpen
                  ? "visible max-h-96 opacity-100"
                  : "invisible max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col px-6 py-2">
                {[
                  { href: "#about", icon: <User size={20} />, label: "About" },
                  { href: "#skills", icon: <Code2 size={20} />, label: "Skills" },
                  {
                    href: "#projects",
                    icon: <FolderGit2 size={20} />,
                    label: "Projects",
                  },
                  {
                    href: "#education",
                    icon: <GraduationCap size={20} />,
                    label: "Education",
                  },
                  { href: "#contact", icon: <Mail size={20} />, label: "Contact" },
                  { href: "#certificates", icon: <Award size={20} />, label: "Certificates" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2.5 border-b border-[var(--theme-border)]/60 py-3 text-lg text-[var(--theme-muted)] last:border-0 hover:text-[var(--theme-primary)]"
                  >
                    {item.icon}
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </header>

        <main className="mx-auto w-[90%]">
          {/* Hero */}
          <section className="flex items-center justify-between mt-6 lg:mt-0 lg:mb-8">
  <div className="grid w-full items-center gap-10 lg:grid-cols-2">
    {/* Left: text */}
    <div className=" text-center  md:text-left">
      <div
        className="hero-fade inline-flex items-center gap-2 font-mono text-lg text-[var(--theme-primary)]"
        style={{
          animationDelay: "0.3s",
          animationPlayState: startHero ? "running" : "paused",
        }}
      >
        <Code2 size={22} /> Front-end developer
      </div>

      <h1
        className="hero-fade mt-2.5 font-display text-[clamp(2.4rem,5vw,3.6rem)] font-bold leading-[1.15]"
        style={{
          animationDelay: "0.5s",
          animationPlayState: startHero ? "running" : "paused",
        }}
      >
        <span className="text-[var(--theme-subtle)]">Amera Tarek</span> builds interfaces
        with <span className="text-[var(--theme-accent)]">React</span>.
      </h1>

      <p
        className="hero-fade mx-auto mt-4 max-w-[480px] text-xl text-[var(--theme-muted)] md:mx-0"
        style={{
          animationDelay: "0.7s",
          animationPlayState: startHero ? "running" : "paused",
        }}
      >
        Front-end developer, focused on React.js and Next.js — turning designs
        into fast, responsive, component-driven interfaces.
      </p>

      <div
        className="hero-fade mt-7 flex flex-col flex-wrap items-center gap-12 sm:flex-row md:justify-start md:gap-16"
        style={{
          animationDelay: "0.9s",
          animationPlayState: startHero ? "running" : "paused",
        }}
      >
        <Btn href="#projects">
          View projects
        </Btn>
        <Btn href="#contact">Get in touch</Btn>
      </div>
    </div>

    {/* Right: animated 3D laptop */}
    <div
      className="hero-fade min-w-0 overflow-hidden rounded-[2rem] border border-[var(--theme-border-soft)] bg-[radial-gradient(ellipse_at_50%_45%,var(--theme-primary-glow),rgba(255,255,255,0.58)_58%,rgba(255,255,255,0.25))] shadow-[0_24px_70px_-48px_var(--theme-hero-shadow)] lg:mt-8"
      style={{
        animationDelay: "0.5s",
        animationPlayState: startHero ? "running" : "paused",
      }}
    >
      <Hero3D />
    </div>
  </div>

  <style jsx>{`
    @keyframes heroFadeIn {
      0% {
        opacity: 0;
        transform: translateY(18px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .hero-fade {
      opacity: 0;
      animation: heroFadeIn 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
    }
  `}</style>
</section>

          {/* About */}
          <section
            id="about"
            className="scroll-mt-20 border-t border-[var(--theme-border)] py-14"
          >
            <Reveal>
              <SectionHead
                icon={<User size={22} />}
                label="about"
                title="Who I am"
              />
              <p className="max-w-5xl text-xl text-[var(--theme-muted)]">
                I'm a front-end web developer graduate of the{" "}
                <strong className="text-[var(--theme-ink)]">
                  Faculty of Computer and Information Sciences, Menoufia
                  University
                </strong>
                , currently deepening my practical skills through a front-end
                development track at{" "}
                <strong className="text-[var(--theme-ink)]">Route Academy</strong>. I've
                built projects ranging from static layouts to interactive React
                and Next.js applications, and I enjoy turning a design or an
                idea into an interface that actually works, on every screen
                size.
              </p>
            </Reveal>
          </section>

          {/* Skills */}
          <section
            id="skills"
            className="scroll-mt-20 border-t border-[var(--theme-border)] py-14"
          >
            <Reveal>
              <SectionHead
                icon={<Code2 size={22} />}
                label="skills"
                title="Toolkit"
              />

              <div className="mb-6 overflow-x-auto rounded-[10px] border px-4 border-[var(--theme-border)] bg-[var(--theme-surface)] px-4.5 py-4 font-mono text-sm text-[var(--theme-muted)]">
  import {"{"} {skills.slice(0, -1).map((s) => s.name).join(", ")} {"}"} from{" "}
  <span className="text-[var(--theme-accent)]">'amira/skills'</span>;
</div>

              <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
  <div className="marquee-track flex w-max gap-3">
    {[...skills, ...skills].map((skill, i) => {
      const Icon = skill.icon;
      return (
        <span
          key={`${skill.name}-${i}`}
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--theme-border)] bg-[var(--theme-surface)] px-4 py-3 text-lg text-[var(--theme-muted)]"
        >
          <Icon size={18} style={{ color: skill.color }} />
          {skill.name}
        </span>
      );
    })}
  </div>
</div>

<style jsx>{`
  @keyframes marqueeScroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  .marquee-track {
    animation: marqueeScroll 28s linear infinite;
  }
  .marquee-track:hover {
    animation-play-state: paused;
  }
`}</style>
            </Reveal>
          </section>

          

          {/* Projects */}
          <section
            id="projects"
            className="scroll-mt-20 border-t border-[var(--theme-border)] py-14"
          >
            <Reveal>
              <SectionHead
                icon={<FolderGit2 size={22} />}
                label="projects"
                title="Selected work"
              />
          <div className="mb-8 flex flex-wrap gap-3" role="tablist">
  {tabs.map((tab) => (
    <button
      key={tab}
      type="button"
      role="tab"
      aria-selected={activeTab === tab}
      onClick={() => {
        setActiveTab(tab);
        setShowAllProjects(false);
      }}
      className="fancy-button fancy-filter"
    >
      <FancyButtonContent>{tab}</FancyButtonContent>
    </button>
  ))}
</div>

              <div className="grid gap-x-6 gap-y-1 sm:grid-cols-2 xl:grid-cols-3">
                {visibleProjects.map((project) => (
                  <article
                    key={project.title}
                    className="uiverse-card group mt-6 flex h-full flex-col rounded-xl bg-[var(--theme-card)] bg-clip-padding text-[var(--theme-ink)] shadow-md"
                  >
                    <div className="relative mx-4 -mt-6 h-60 overflow-hidden rounded-xl bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-primary-light)] text-white shadow-lg shadow-[rgb(var(--theme-primary-rgb)/0.30)]">
                      <Image
                        src={project.image}
                        alt={`${project.title} cover`}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <span className="absolute bottom-3 left-3 rounded-full border border-white/30 bg-[color:var(--theme-ink)]/75 px-3 py-1 font-mono text-xs text-white shadow-sm backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col gap-2.5 p-6">
                      <div className="font-display text-xl font-semibold leading-snug text-[var(--theme-ink)]">
                        {project.title}
                      </div>
                      <p className="m-0 line-clamp-3 flex-1 text-base leading-relaxed text-[var(--theme-copy)]">
                        {project.desc}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-3 p-6 pt-0">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="fancy-button"
                        >
                          <FancyButtonContent>View live <ArrowUpRight size={17} /></FancyButtonContent>
                        </a>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fancy-button"
                          >
                            <FancyButtonContent>View code <GithubMark /></FancyButtonContent>
                          </a>
                        )}
                    </div>
                  </article>
                ))}
              </div>
              {activeTab === "All" && projects.length > 6 && (
                <button
                  type="button"
                  onClick={() => setShowAllProjects((show) => !show)}
                  className="fancy-button"
                >
                  <FancyButtonContent>
                    {showAllProjects ? "Show featured projects" : `View all ${projects.length} projects`}
                  </FancyButtonContent>
                </button>
              )}
            </Reveal>
          </section>

          {/* Education */}
          <section
            id="education"
            className="scroll-mt-20 border-t border-[var(--theme-border)] py-14"
          >
            <Reveal>
              <SectionHead
                icon={<GraduationCap size={22} />}
                label="education"
                title="Background"
              />

              <div>
                <div className="grid grid-cols-[16px_1fr] gap-4.5 pb-8">
                  <div className="mt-1.5 h-3 w-3 rounded-full bg-[var(--theme-accent)]" />
                  <div>
                    <div className="font-mono text-lg text-[var(--theme-muted)]">2017</div>
                    <div className="text-xl font-semibold text-[var(--theme-ink)]">
                      B.Sc. in Computer and Information Sciences
                    </div>
                    <div className="mt-1 text-lg text-[var(--theme-muted)]">
                      Faculty of Computer and Information Sciences, Menoufia
                      University — Grade: Good
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-[16px_1fr] gap-4.5">
                  <div className="mt-1.5 h-3 w-3 rounded-full bg-[var(--theme-primary)]" />
                  <div>
                    <div className="font-mono text-lg text-[var(--theme-muted)]">2026</div>
                    <div className="text-xl font-semibold text-[var(--theme-ink)]">
                      Front-End Web Development Track{" "}
                      <span className="ml-2 rounded-full border border-[color:var(--theme-primary)]/30 bg-[var(--theme-primary)]/10 px-2.5 py-0.5 text-base text-[var(--theme-primary)]">
                        Route Academy
                      </span>
                    </div>
                    <div className="mt-1 text-lg text-[var(--theme-muted)]">
                      HTML, CSS, JavaScript, TypeScript, Tailwind CSS,
                      Bootstrap, React.js, Next.js
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          {/* Certificates */}
<section
  id="certificates"
  className="scroll-mt-20 border-t border-[var(--theme-border)] py-14"
>
  <Reveal>
    <SectionHead
      icon={<Award size={22} />}
      label="certificates"
      title="Certifications"
    />

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {certificates.map((cert) => (
    <a
      key={cert.title}
      href={cert.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl border-2 border-[var(--theme-border)] bg-[var(--theme-surface)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--theme-primary)]"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--theme-card)]">
        <Image
          src={cert.image}
          alt={`${cert.title} certificate`}
          fill
          className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-1.5 p-5">
        <div className="font-display text-lg font-semibold text-[var(--theme-ink)]">
          {cert.title}
        </div>
        <div className="text-base text-[var(--theme-muted)]">
          {cert.issuer} — {cert.year}
        </div>
        <span className="mt-1 inline-flex w-fit items-center gap-1.5 text-base text-[var(--theme-primary)] group-hover:underline">
          View certificate <ArrowUpRight size={16} />
        </span>
      </div>
    </a>
  ))}
</div>
  </Reveal>
</section>

          {/* Contact */}
          <section
            id="contact"
            className="scroll-mt-20 border-t border-[var(--theme-border)] pb-24 py-14"
          >
            <Reveal>
              <div className="rounded-[2rem] border border-[var(--theme-border-soft)] bg-[var(--theme-card)] p-7 shadow-[0_20px_60px_-40px_var(--theme-card-shadow)] sm:p-9">
                <div className="flex flex-wrap items-center justify-between gap-6">
                <div>
                  <h3 className="mb-1.5 font-display text-2xl font-semibold text-[var(--theme-ink)]">
                    Let's build something.
                  </h3>
                  <p className="m-0 text-lg text-[var(--theme-muted)]">
                    Open to front-end / React &amp; Next.js roles — reach out
                    any time.
                  </p>
                </div>

                <div className="flex flex-wrap gap-12">
                  <Btn href="mailto:ameratarek142013@gmail.com" variant="fancy">
                    <Mail size={18} /> Email me
                  </Btn>
                  <Btn href="tel:+201064494778" variant="fancy">
                    <Phone size={18} /> Call me
                  </Btn>
                  <Btn
                    href="https://github.com/ameratarek142013-dotcom"
                    variant="fancy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubMark /> GitHub
                  </Btn>
                </div>
                </div>

                <div className="mt-2 flex w-full flex-wrap items-center justify-end gap-4 border-t border-[var(--theme-border)] pt-6">
                  <span className="font-mono text-base text-[var(--theme-muted)]">
                    Find me on
                  </span>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.linkedin.com/in/amera-tarek"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="fancy-button"
                    >
                      <FancyButtonContent><LinkedinMark /> LinkedIn</FancyButtonContent>
                    </a>

                    <a
                      href="https://wa.me/201064494778"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className="fancy-button"
                    >
                      <FancyButtonContent><WhatsappMark /> WhatsApp</FancyButtonContent>
                    </a>

                    <a
                      href="https://www.facebook.com/share/1HmqdomFY8/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="fancy-button"
                    >
                      <FancyButtonContent><FacebookMark /> Facebook</FancyButtonContent>
                    </a>

                    <a
                      href="https://www.instagram.com/mera_tarek?igsh=MWMyd2FmOGpsMzFpZg%3D%3D&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="fancy-button"
                    >
                      <FancyButtonContent><InstagramMark /> Instagram</FancyButtonContent>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>
        </main>

        <footer className="flex justify-center border-t border-[var(--theme-border-soft)] py-6 text-center font-mono text-base text-[var(--theme-copy)]">
          <span>© {new Date().getFullYear()} Amera Tarek — built with</span>
          <HeartIcon className="animate-pulse mx-3 scale-110" fill="red" color="red"/>
          <span>React &
          Tailwind.</span>
          <span className="mx-2">·</span>
          <a href="https://uiverse.io" target="_blank" rel="noopener noreferrer" className="text-[var(--theme-primary)] transition-colors hover:text-[var(--theme-accent-hover)] hover:underline">
            UI inspiration: Uiverse
          </a>
        </footer>
      </div>
    </>
  );
}
