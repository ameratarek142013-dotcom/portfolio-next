"use client";
import dynamic from "next/dynamic";
const Hero3D = dynamic(() => import("./_components/Hero3D/Hero3D"), { ssr: false });
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  ArrowUpRight,
  User,
  Code2,
  FolderGit2,
  GraduationCap,
  Menu,
  X,
} from "lucide-react";

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
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "TypeScript",
  "OOP",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",
  "Git",
  "GitHub",
  "REST APIs",
  "Axios, Fetch API",
  "React Router",
  "Context API",
  "Figma",
  "Responsive / mobile-first design",
];

const projects = [
  {
    title: "Tawasol",
    desc: "A responsive social media web application built with React, featuring user authentication, post creation and sharing, likes, comments and replies, and user profiles. Integrated REST APIs to handle authentication and social interactions, with an interactive UI.",
    url: "https://tawasol-roan.vercel.app/",
    image: "/projects/tawasol.png",
  },
  {
    title: "Adasa",
    desc: "Interactive web experience built with React and Three.js, exploring 3D elements in the browser.",
    url: "https://adasa-react-three.vercel.app/",
    image: "/projects/adasa.png",
  },
  {
    title: "Quiz App",
    desc: "A quiz application with a dynamic, interactive UI and instant feedback on answers.",
    url: "https://ameratarek142013-dotcom.github.io/Quiz-App-Design/",
    image: "/projects/quiz.png",
  },
  {
    title: "Kanban Board",
    desc: "A drag-and-drop task management board for organizing work across custom columns.",
    url: "https://ameratarek142013-dotcom.github.io/kanban-Board/",
    image: "/projects/kanbann.png",
  },
  {
    title: "COSMOS",
    desc: "Space Explorer Dashboard, Real-time space data from NASA & SpaceDevs.",
    url: "https://ameratarek142013-dotcom.github.io/AmeraTarek-c47-sun-tu1-4-offline-assignment11-01064494778/#",
    image: "/projects/cosmos.png",
  },
  {
    title: "NutriPlan",
    desc: "A nutrition planning interface design, focused on clear layout for meal and diet tracking.",
    url: "https://ameratarek142013-dotcom.github.io/Nutriplan---Design/",
    image: "/projects/nutriplan.png",
  },
  {
    title: "ContactHub",
    desc: "A contact management web application for storing and organizing contact details.",
    url: "https://ameratarek142013-dotcom.github.io/contactHub/",
    image: "/projects/contacthub.png",
  },
  {
    title: "Dinner List",
    desc: "An interactive dinner / recipe list app for planning and organizing meals.",
    url: "https://ameratarek142013-dotcom.github.io/git-dinnerList/",
    image: "/projects/dinnerlist.png",
  },
  {
    title: "Mini Games",
    desc: "A small collection of interactive JavaScript browser games.",
    url: "https://ameratarek142013-dotcom.github.io/git-games/",
    image: "/projects/minigames.png",
  },
  {
    title: "EliteHome",
    desc: "A real-estate style property listing interface, focused on clean browsing and layout.",
    url: "https://ameratarek142013-dotcom.github.io/git.eliteHome/",
    image: "/projects/elitehome.png",
  },
  {
    title: "Money",
    desc: "A personal finance / budget tracking interface for logging and reviewing spending.",
    url: "https://ameratarek142013-dotcom.github.io/git-money/",
    image: "/projects/money.png",
  },
  {
    title: "The UX Review",
    desc: "BRUTAL THOUGHTS BOLD IDEAS.",
    url: "https://ameratarek142013-dotcom.github.io/ux-blog/",
    image: "/projects/ux.png",
  },
  {
    title: "DJI Mavic",
    desc: "Experience unparalleled flight performance with 8K camera capabilities, 40-minute flight time, and advanced AI obstacle avoidance technology.",
    url: "https://ameratarek142013-dotcom.github.io/git-dji/",
    image: "/projects/dji.png",
  },
  {
    title: "Fitcore GYM",
    desc: "A FitCore gym transform your body and mind at premium fitness facility.",
    url: "https://ameratarek142013-dotcom.github.io/AmeraTarek-c47-sun-tu1-4-offline-assignment2-01064494778/",
    image: "/projects/gym.png",
  },
];

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
      <div className="flex items-center gap-2 mb-6 font-mono text-lg text-[#57534E]">
        <span className="inline-flex text-[#0F766E]">{icon}</span>
        {label}
      </div>
      <h2 className="mt-2 font-display text-[clamp(1.7rem,3.3vw,2.1rem)] font-semibold text-[#292524]">
        {title}
      </h2>
    </div>
  );
}

function NavLink({ href, icon, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 text-2xl text-[#854D0E] transition-colors hover:text-[#0F766E]"
    >
      {icon}
      {children}
    </a>
  );
}

function Btn({ href, primary, children, ...rest }) {
  const base =
    "inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-base font-medium transition-transform hover:-translate-y-0.5";
  const styles = primary
    ? "border-[#A16207] bg-[#A16207] text-white hover:border-[#854D0E] hover:bg-[#854D0E]"
    : "border-[#B8B3AE] text-[#292524] hover:border-[#0F766E] hover:text-[#0F766E]";

  return (
    <a href={href} className={`${base} ${styles}`} {...rest}>
      {children}
    </a>
  );
}

export default function Portfolio() {
  const [showIntro, setShowIntro] = useState(true);
  const [introExit, setIntroExit] = useState(false);
  const [startHero, setStartHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIntroExit(true);
      setStartHero(true);
    }, 1800);

    const removeTimer = setTimeout(() => setShowIntro(false), 2400);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  const firstName = "Amira".split("");
  const lastName = "Tarek".split("");

  return (
    <>
      {showIntro && (
        <div
          className={`fixed inset-0 z-[999] flex flex-col items-center justify-center overflow-hidden bg-[#D6D3D1] transition-all duration-500 ease-out ${
            introExit
              ? "pointer-events-none scale-105 opacity-0"
              : "scale-100 opacity-100"
          }`}
        >
          <div className="absolute inset-0 [background-image:radial-gradient(700px_450px_at_50%_45%,rgba(15,118,110,0.12),transparent_70%)]" />

          <h1 className="relative flex flex-wrap justify-center font-display text-[clamp(2.8rem,8.5vw,5.4rem)] font-bold text-[#292524]">
            {firstName.map((ch, i) => (
              <span
                key={`f-${i}`}
                className="intro-letter inline-block text-[#75706A]"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {ch}
              </span>
            ))}
            <span>&nbsp;</span>
            {lastName.map((ch, i) => (
              <span
                key={`l-${i}`}
                className="intro-letter inline-block text-[#A16207]"
                style={{
                  animationDelay: `${(i + firstName.length + 1) * 0.05}s`,
                }}
              >
                {ch}
              </span>
            ))}
          </h1>

          <div
            className="intro-line relative mt-3 h-[2px] bg-gradient-to-r from-transparent via-[#0F766E] to-transparent"
            style={{
              animationDelay: `${(firstName.length + lastName.length + 2) * 0.05}s`,
            }}
          />

          <p
            className="intro-caption relative mt-4 font-mono text-lg text-[#292524]"
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

      <div className="min-h-screen bg-[#D6D3D1] text-lg text-[#292524] [background-image:radial-gradient(1100px_600px_at_85%_-10%,rgba(15,118,110,0.08),transparent_60%),radial-gradient(900px_500px_at_-10%_20%,rgba(161,98,7,0.07),transparent_55%)]">
        {/* Navigation */}
        <header className="sticky top-0 z-50 border-b border-[#B8B3AE] bg-[#D6D3D1]/90 backdrop-blur-md">
          <nav className="relative mx-auto flex w-[90%] items-center justify-between px-6 py-2">
            {/* Logo + Name */}
            <div className="flex items-center gap-2">
              <img
                className="h-16 w-16 object-cover rounded-full"
                src="/projects/logo.jpg"
                alt="Logo"
              />

              <a href="#" className="text-4xl font-mono font-black text-[#75706A]">
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
            </div>

            {/* Mobile button */}
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B8B3AE] text-[#292524] lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>

            {/* Mobile menu */}
            <div
              id="mobile-navigation"
              className={`absolute left-0 right-0 top-full overflow-hidden border-b border-[#B8B3AE] bg-[#E7E4E1] shadow-lg transition-all duration-300 lg:hidden ${
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
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2.5 border-b border-[#B8B3AE]/60 py-3 text-lg text-[#57534E] last:border-0 hover:text-[#0F766E]"
                  >
                    {item.icon}
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </header>

        <main className="mx-auto w-[90%] ">
          {/* Hero */}
          <section className="flex items-center justify-between mt-6 lg:mt-0 lg:mb-14">
  <div className="grid w-full items-center gap-10 md:grid-cols-2">
    {/* Left: text */}
    <div className=" text-center  md:text-left">
      <div
        className="hero-fade inline-flex items-center gap-2 font-mono text-lg text-[#0F766E]"
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
        <span className="text-[#75706A]">Amera Tarek</span> builds interfaces
        with <span className="text-[#A16207]">React</span>.
      </h1>

      <p
        className="hero-fade mx-auto mt-4 max-w-[480px] text-xl text-[#57534E] md:mx-0"
        style={{
          animationDelay: "0.7s",
          animationPlayState: startHero ? "running" : "paused",
        }}
      >
        Front-end developer, focused on React.js and Next.js — turning designs
        into fast, responsive, component-driven interfaces.
      </p>

      <div
        className="hero-fade mt-7 flex flex-wrap justify-center gap-3.5 md:justify-start"
        style={{
          animationDelay: "0.9s",
          animationPlayState: startHero ? "running" : "paused",
        }}
      >
        <Btn href="#projects" primary>
          View projects
        </Btn>
        <Btn href="#contact">Get in touch</Btn>
      </div>
    </div>

    {/* Right: animated 3D laptop */}
    <div
      className="hero-fade min-w-0"
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
            className="scroll-mt-20 border-t border-[#B8B3AE] py-14"
          >
            <Reveal>
              <SectionHead
                icon={<User size={22} />}
                label="about"
                title="Who I am"
              />
              <p className="max-w-5xl text-xl text-[#57534E]">
                I'm a front-end web developer graduate of the{" "}
                <strong className="text-[#292524]">
                  Faculty of Computer and Information Sciences, Menoufia
                  University
                </strong>
                , currently deepening my practical skills through a front-end
                development track at{" "}
                <strong className="text-[#292524]">Route Academy</strong>. I've
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
            className="scroll-mt-20 border-t border-[#B8B3AE] py-14"
          >
            <Reveal>
              <SectionHead
                icon={<Code2 size={22} />}
                label="skills"
                title="Toolkit"
              />

              <div className="mb-6 overflow-x-auto rounded-[10px] border px-4 border-[#B8B3AE] bg-[#E7E4E1] px-4.5 py-4 font-mono text-sm text-[#57534E]">
                import {"{"} {skills.slice(0, -1).join(", ")} {"}"} from{" "}
                <span className="text-[#A16207]">'amira/skills'</span>;
              </div>

              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-2 rounded-full border border-[#B8B3AE] bg-[#E7E4E1] px-4 py-2 text-base text-[#44403C]"
                  >
                    <span className="h-[8px] w-[8px] rounded-sm bg-[#0F766E]" />
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          </section>

          {/* Projects */}
          <section
            id="projects"
            className="scroll-mt-20 border-t border-[#B8B3AE] py-14"
          >
            <Reveal>
              <SectionHead
                icon={<FolderGit2 size={22} />}
                label="projects"
                title="Selected work"
              />

              <div className="grid gap-8 sm:grid-cols-3">
                {projects.map((project) => (
                  <article
                    key={project.title}
                    className="flex flex-col overflow-hidden rounded-2xl border-2 border-[#B8B3AE] bg-[#E7E4E1] transition-all duration-300 hover:-translate-y-3 hover:border-[#0F766E]"
                  >
                    <div className="relative aspect-[5/3] w-full overflow-hidden bg-[#D6D3D1]">
                      <Image
                        src={project.image}
                        alt={`${project.title} cover`}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>

                    <div className="flex flex-1 flex-col gap-2.5 p-5">
                      <div className="font-display text-lg font-semibold text-[#292524]">
                        {project.title}
                      </div>
                      <p className="m-0 line-clamp-3 flex-1 text-base text-[#57534E]">
                        {project.desc}
                      </p>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-fit items-center gap-1.5 text-base text-[#0F766E] hover:underline"
                      >
                        View live <ArrowUpRight size={17} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          </section>

          {/* Education */}
          <section
            id="education"
            className="scroll-mt-20 border-t border-[#B8B3AE] py-14"
          >
            <Reveal>
              <SectionHead
                icon={<GraduationCap size={22} />}
                label="education"
                title="Background"
              />

              <div>
                <div className="grid grid-cols-[16px_1fr] gap-4.5 pb-8">
                  <div className="mt-1.5 h-3 w-3 rounded-full bg-[#A16207]" />
                  <div>
                    <div className="font-mono text-lg text-[#57534E]">2017</div>
                    <div className="text-xl font-semibold text-[#292524]">
                      B.Sc. in Computer and Information Sciences
                    </div>
                    <div className="mt-1 text-lg text-[#57534E]">
                      Faculty of Computer and Information Sciences, Menoufia
                      University — Grade: Good
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-[16px_1fr] gap-4.5">
                  <div className="mt-1.5 h-3 w-3 rounded-full bg-[#0F766E]" />
                  <div>
                    <div className="font-mono text-lg text-[#57534E]">2026</div>
                    <div className="text-xl font-semibold text-[#292524]">
                      Front-End Web Development Track{" "}
                      <span className="ml-2 rounded-full border border-[#0F766E]/30 bg-[#0F766E]/10 px-2.5 py-0.5 text-base text-[#0F766E]">
                        Route Academy
                      </span>
                    </div>
                    <div className="mt-1 text-lg text-[#57534E]">
                      HTML, CSS, JavaScript, TypeScript, Tailwind CSS,
                      Bootstrap, React.js, Next.js
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          {/* Contact */}
          <section
            id="contact"
            className="scroll-mt-20 border-t border-[#B8B3AE] pb-24 py-14"
          >
            <Reveal>
              <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-[#B8B3AE] bg-[#E7E4E1] p-9">
                <div>
                  <h3 className="mb-1.5 font-display text-2xl font-semibold text-[#292524]">
                    Let's build something.
                  </h3>
                  <p className="m-0 text-lg text-[#57534E]">
                    Open to front-end / React &amp; Next.js roles — reach out
                    any time.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Btn href="mailto:ameratarek142013@gmail.com" primary>
                    <Mail size={18} /> Email me
                  </Btn>
                  <Btn href="tel:+201064494778">
                    <Phone size={18} /> phone
                  </Btn>
                  <Btn
                    href="https://github.com/ameratarek142013-dotcom"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubMark /> GitHub
                  </Btn>
                </div>

                <div className="mt-2 flex w-full flex-wrap items-center justify-end gap-4 border-t border-[#B8B3AE] pt-6">
                  <span className="font-mono text-base text-[#57534E]">
                    Find me on
                  </span>

                  <div className="flex gap-3">
                    <a
                      href="https://www.linkedin.com/in/amera-tarek"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B8B3AE] text-[#57534E] transition-colors hover:border-[#0A66C2] hover:text-[#0A66C2]"
                    >
                      <LinkedinMark />
                    </a>

                    <a
                      href="https://wa.me/201064494778"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B8B3AE] text-[#57534E] transition-colors hover:border-green-700 hover:text-green-700"
                    >
                      <WhatsappMark />
                    </a>

                    <a
                      href="https://www.facebook.com/share/1HmqdomFY8/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B8B3AE] text-[#57534E] transition-colors hover:border-blue-700 hover:text-blue-700"
                    >
                      <FacebookMark />
                    </a>

                    <a
                      href="https://www.instagram.com/mera_tarek?igsh=MWMyd2FmOGpsMzFpZg%3D%3D&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B8B3AE] text-[#57534E] transition-colors hover:border-fuchsia-700 hover:text-fuchsia-700"
                    >
                      <InstagramMark />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>
        </main>

        <footer className="border-t border-[#B8B3AE] py-6 text-center font-mono text-base text-[#57534E]">
          © {new Date().getFullYear()} Amira Tarek — built with ❤️ React &
          Tailwind.
        </footer>
      </div>
    </>
  );
}