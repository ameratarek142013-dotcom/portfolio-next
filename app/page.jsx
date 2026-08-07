"use client";

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
} from "lucide-react";

function GithubMark(props) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.8 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.6.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.44-2.7 5.42-5.26 5.7.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.8.55C20.21 21.39 23.5 17.09 23.5 12 23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinMark(props) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function WhatsappMark(props) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" {...props}>
      <path d="M12.02 2C6.5 2 2 6.5 2 12.02c0 1.77.46 3.44 1.27 4.9L2 22l5.2-1.24a10 10 0 0 0 4.82 1.23h.01c5.52 0 10.02-4.5 10.02-10.02C22.05 6.5 17.55 2 12.02 2Zm0 18.1h-.01a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.09.74.74-3.01-.19-.31a8.05 8.05 0 0 1-1.24-4.19c0-4.46 3.63-8.09 8.13-8.09 2.17 0 4.2.85 5.74 2.38a8.05 8.05 0 0 1 2.38 5.73c0 4.46-3.63 8.06-8.03 8.06Zm4.44-6.02c-.24-.12-1.43-.7-1.65-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.12.16 1.71 2.61 4.15 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.43-.58 1.63-1.15.2-.56.2-1.04.14-1.15-.06-.11-.22-.17-.46-.29Z" />
    </svg>
  );
}

function FacebookMark(props) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" {...props}>
      <path d="M13.5 21.9v-8.4h2.83l.42-3.28h-3.25V8.1c0-.95.26-1.6 1.63-1.6h1.74V3.56A23.4 23.4 0 0 0 14.35 3.4c-2.5 0-4.22 1.53-4.22 4.33v2.41H7.29v3.28h2.84v8.4h3.37Z" />
    </svg>
  );
}

function InstagramMark(props) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
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
  "Responsive / mobile-first design",
];

const projects = [
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
        entries.forEach((e) => {
          if (e.isIntersecting) {
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
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {children}
    </div>
  );
}

function SectionHead({ icon, label, title }) {
  return (
    <div className="mb-9">
      <div className="flex items-center gap-2 text-faint text-[13px] font-mono">
        <span className="text-teal inline-flex">{icon}</span>
        {label}
      </div>
      <h2 className="font-display text-[clamp(1.5rem,3vw,1.9rem)] font-semibold mt-2 text-ink">
        {title}
      </h2>
    </div>
  );
}

function NavLink({ href, icon, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 text-dim text-sm hover:text-teal transition-colors"
    >
      {icon}
      {children}
    </a>
  );
}

function Btn({ href, primary, children, ...rest }) {
  const base =
    "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-transform hover:-translate-y-0.5";
  const styles = primary
    ? "bg-gold text-[#1a1305] border-gold"
    : "border-border text-ink hover:border-teal hover:text-teal";
  return (
    <a href={href} className={`${base} ${styles}`} {...rest}>
      {children}
    </a>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-bg text-ink [background-image:radial-gradient(1100px_600px_at_85%_-10%,rgba(94,234,212,0.08),transparent_60%),radial-gradient(900px_500px_at_-10%_20%,rgba(242,184,75,0.07),transparent_55%)]">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[rgba(20,18,31,0.75)] border-b border-border">
        <nav className="max-w-[1080px] mx-auto flex items-center justify-between px-6 py-4">
          <div className="font-semibold text-[1.05rem]">
            amira<span className="text-gold">.</span>dev
          </div>
          <div className="hidden sm:flex gap-6">
            <NavLink href="#about" icon={<User size={15} />}>About</NavLink>
            <NavLink href="#skills" icon={<Code2 size={15} />}>Skills</NavLink>
            <NavLink href="#projects" icon={<FolderGit2 size={15} />}>Projects</NavLink>
            <NavLink href="#education" icon={<GraduationCap size={15} />}>Education</NavLink>
            <NavLink href="#contact" icon={<Mail size={15} />}>Contact</NavLink>
          </div>
        </nav>
      </header>

      <main className="max-w-[1080px] mx-auto px-6">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-teal text-[0.85rem]">
                <Code2 size={15} /> Front-end developer
              </div>
              <h1 className="font-display font-bold text-[clamp(2.1rem,5vw,3.2rem)] mt-2.5 leading-[1.15]">
                Amira Tarek builds interfaces with{" "}
                <span className="text-gold">React</span>.
              </h1>
              <p className="text-dim text-[1.05rem] mt-4 max-w-[460px]">
                Front-end developer from Menoufia, Egypt, focused on React.js
                and Next.js — turning designs into fast, responsive,
                component-driven interfaces.
              </p>
              <div className="mt-7 flex gap-3.5 flex-wrap">
                <Btn href="#projects" primary>
                  View projects
                </Btn>
                <Btn href="#contact">Get in touch</Btn>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border bg-surface shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)]">
              <div className="flex items-center gap-2 px-4 py-3 bg-surface2 border-b border-border">
                <span className="w-2.5 h-2.5 rounded-full bg-red" />
                <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                <span className="w-2.5 h-2.5 rounded-full bg-teal" />
                <span className="ml-2 text-faint text-[0.78rem] font-mono">
                  Developer.jsx
                </span>
              </div>
              <div className="p-5 text-[0.85rem] font-mono overflow-x-auto">
                <div>
                  <span className="text-pink">function</span>{" "}
                  <span className="text-teal">Developer</span>() {"{"}
                </div>
                <div>
                  &nbsp;&nbsp;<span className="text-pink">const</span> stack ={" "}
                  [<span className="text-gold">'React'</span>,{" "}
                  <span className="text-gold">'Next.js'</span>,{" "}
                  <span className="text-gold">'TypeScript'</span>];
                </div>
                <div className="text-faint italic">
                  &nbsp;&nbsp;{"// training at Route Academy"}
                </div>
                <div>
                  &nbsp;&nbsp;<span className="text-pink">return</span> (
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;
                  <span className="text-sky">Amira</span>
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;role=
                  <span className="text-gold">"Front-End Developer"</span>
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stack={"{stack}"}
                </div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;/&gt;</div>
                <div>&nbsp;&nbsp;);</div>
                <div>
                  {"}"}
                  <span className="inline-block w-[7px] h-[1em] bg-teal align-text-bottom ml-0.5 animate-blink" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-14 border-t border-border">
          <Reveal>
            <SectionHead icon={<User size={15} />} label="about" title="Who I am" />
            <p className="text-dim max-w-[660px] text-[1rem]">
              I'm a front-end web developer graduate of the{" "}
              <strong className="text-ink">
                Faculty of Computer and Information Sciences, Menoufia
                University
              </strong>
              , currently deepening my practical skills through a front-end
              development track at{" "}
              <strong className="text-ink">Route Academy</strong>. I've built
              projects ranging from static layouts to interactive React and
              Next.js applications, and I enjoy turning a design or an idea
              into an interface that actually works, on every screen size.
            </p>
          </Reveal>
        </section>

        {/* Skills */}
        <section id="skills" className="py-14 border-t border-border">
          <Reveal>
            <SectionHead icon={<Code2 size={15} />} label="skills" title="Toolkit" />
            <div className="font-mono text-[0.85rem] text-faint bg-surface border border-border rounded-[10px] px-4.5 py-4 overflow-x-auto mb-6">
              import {"{"} {skills.slice(0, -1).join(", ")} {"}"} from{" "}
              <span className="text-gold">'amira/skills'</span>;
            </div>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 rounded-full bg-surface border border-border text-[0.85rem] text-dim inline-flex items-center gap-2"
                >
                  <span className="w-[7px] h-[7px] rounded-sm bg-teal" />
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Projects */}
        <section id="projects" className="py-14 border-t border-border">
          <Reveal>
            <SectionHead
              icon={<FolderGit2 size={15} />}
              label="projects"
              title="Selected work"
            />
            <div className="grid sm:grid-cols-3 gap-4">
              {projects.map((p) => (
                <article
                  key={p.title}
                  className="bg-surface border border-border rounded-2xl overflow-hidden flex flex-col transition-all hover:border-teal hover:-translate-y-1"
                >
                  <div className="relative w-full aspect-[5/3] bg-surface2">
                    <Image
                      src={p.image}
                      alt={`${p.title} cover`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 flex flex-col gap-2.5 flex-1">
                    <div className="font-display font-semibold text-[1.05rem]">
                      {p.title}
                    </div>
                    <p className="text-dim text-[0.9rem] flex-1 m-0">
                      {p.desc}
                    </p>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal text-[0.85rem] inline-flex items-center gap-1.5 w-fit hover:underline"
                    >
                      View live <ArrowUpRight size={14} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Education */}
        <section id="education" className="py-14 border-t border-border">
          <Reveal>
            <SectionHead
              icon={<GraduationCap size={15} />}
              label="education"
              title="Background"
            />
            <div>
              <div className="grid grid-cols-[16px_1fr] gap-4.5 pb-8">
                <div className="w-3 h-3 rounded-full bg-gold mt-1.5" />
                <div>
                  <div className="font-mono text-faint text-[0.8rem]">2017</div>
                  <div className="font-semibold">
                    B.Sc. in Computer and Information Sciences
                  </div>
                  <div className="text-dim text-[0.9rem] mt-1">
                    Faculty of Computer and Information Sciences, Menoufia
                    University — Grade: Good
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-[16px_1fr] gap-4.5">
                <div className="w-3 h-3 rounded-full bg-teal mt-1.5" />
                <div>
                  <div className="font-mono text-faint text-[0.8rem]">
                    2026
                  </div>
                  <div className="font-semibold">
                    Front-End Web Development Track{" "}
                    <span className="text-[0.72rem] px-2.5 py-0.5 rounded-full ml-2 bg-teal/10 text-teal border border-teal/30">
                      Route Academy
                    </span>
                  </div>
                  <div className="text-dim text-[0.9rem] mt-1">
                    HTML, CSS, JavaScript, TypeScript, Tailwind CSS, Bootstrap,
                    React.js, Next.js
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Contact */}
        <section id="contact" className="py-14 pb-24 border-t border-border">
          <Reveal>
            <div className="bg-surface border border-border rounded-2xl p-9 flex flex-wrap items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-[1.3rem] font-semibold mb-1.5">
                  Let's build something.
                </h3>
                <p className="text-dim m-0">
                  Open to front-end / React &amp; Next.js roles — reach out
                  any time.
                </p>
              </div>

              <div className="flex gap-3 flex-wrap">
                <Btn href="mailto:ameratarek142013@gmail.com" primary>
                  <Mail size={15} /> Email me
                </Btn>
                <Btn href="tel:+201064494778">
                  <Phone size={15} /> phone
                </Btn>
                <Btn
                  href="https://github.com/ameratarek142013-dotcom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubMark /> GitHub
                </Btn>
              </div>

              <div className="w-full pt-6 mt-2 border-t border-border flex flex-wrap justify-end items-center gap-4">
                <span className="text-faint text-[0.8rem] font-mono">Find me on</span>
                <div className="flex gap-3">
                 {/*added linkedin*/}
                  <a
                    href="www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn (placeholder — replace with your profile link)"
                    className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-dim hover:text-sky hover:border-sky transition-colors"
                  >
                    <LinkedinMark />
                  </a>
                  <a
                    href="https://wa.me/201064494778"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp (placeholder — replace with your number link)"
                    className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-dim hover:text-green-600 hover:border-green-600 transition-colors"
                  >
                    <WhatsappMark />
                  </a>
                  <a
                    href="https://www.facebook.com/share/1HmqdomFY8/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook (placeholder — replace with your profile link)"
                    className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-dim hover:text-blue-600 hover:border-blue-600 transition-colors"
                  >
                    <FacebookMark />
                  </a>
                  <a
                    href="https://www.instagram.com/mera_tarek?igsh=MWMyd2FmOGpsMzFpZg%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram (placeholder — replace with your profile link)"
                    className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-dim hover:text-fuchsia-700 hover:border-fuchsia-700 transition-colors"
                  >
                    <InstagramMark />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-border py-6 text-faint text-[0.8rem] text-center font-mono">
        © {new Date().getFullYear()} Amira Tarek — built with React & Tailwind.
      </footer>
    </div>
  );
}
