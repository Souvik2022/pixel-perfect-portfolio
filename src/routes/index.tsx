import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef } from "react";

import portrait from "@/assets/profile-portrait.jpg";
import auraImage from "@/assets/project-aura.jpg";
import floraImage from "@/assets/project-flora.jpg";
import modulImage from "@/assets/project-modul.jpg";
import vesperImage from "@/assets/project-vesper.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Julian Thorne — Graphic Designer" },
      { name: "description", content: "Julian Thorne is an independent graphic designer building visual identities, editorial systems, and digital experiences." },
      { property: "og:title", content: "Julian Thorne — Graphic Designer" },
      { property: "og:description", content: "Visual identities, editorial systems, and digital experiences with clarity and character." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

// Edit this single object to change the profile, projects, experience, and links.
const PORTFOLIO_DATA = {
  name: "Julian Thorne",
  role: "Independent Graphic Designer",
  location: "Berlin, Germany",
  availability: "Available for select projects",
  email: "hello@julianthorne.design",
  intro: "Crafting visual identities that reside at the intersection of Swiss precision and tactile expression.",
  bio: "Focused on building systems for cultural institutions and independent brands. I believe that clarity is the foundation of character, and that every mark should serve a purpose.",
  behance: "https://www.behance.net/",
  projects: [
    {
      title: "Vesper Monograph",
      category: "Identity & publication design",
      description: "A comprehensive identity and publication system for a Zurich-based architecture collective exploring raw materiality.",
      image: vesperImage,
      number: "01",
      href: "https://www.behance.net/",
      layout: "large",
    },
    {
      title: "Flora Rituals",
      category: "Packaging & art direction",
      description: "A tactile packaging system for a botanical skincare studio rooted in slow rituals.",
      image: floraImage,
      number: "02",
      href: "https://www.behance.net/",
      layout: "tall",
    },
    {
      title: "Aura Gallery",
      category: "Digital exhibition platform",
      description: "A typography-led digital space for a gallery that treats every exhibition as a living archive.",
      image: auraImage,
      number: "03",
      href: "https://www.behance.net/",
      layout: "tall",
    },
    {
      title: "Modul Jazz",
      category: "Campaign identity & motion",
      description: "A kinetic typographic system for an international experimental jazz circuit.",
      image: modulImage,
      number: "04",
      href: "https://www.behance.net/",
      layout: "wide",
    },
  ],
  experience: [
    { studio: "Studio Form, Berlin", role: "Senior Designer", years: "2021 — Present", detail: "Leading visual identities for cultural brands with a focus on typography-led systems and editorial direction." },
    { studio: "Kinetik, London", role: "Visual Designer", years: "2018 — 2021", detail: "Built digital-first identity systems and interaction design frameworks for emerging technology studios." },
  ],
  expertise: {
    direction: ["Creative direction", "Identity systems", "Editorial strategy", "Type design"],
    technical: ["Web architecture", "Motion systems", "Technical production", "Creative coding"],
  },
};

function Portfolio() {
  const pageRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    void import("gsap").then(({ gsap }) => {
      if (!pageRef.current || !loaderRef.current) return;
      const context = gsap.context(() => {
        const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
        timeline
          .to(loaderRef.current, { clipPath: "inset(0 0 100% 0)", duration: 1.1, delay: 0.15 })
          .fromTo("[data-reveal]", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.07 }, "-=0.6")
          .fromTo("[data-line]", { scaleX: 0 }, { scaleX: 1, duration: 0.9, transformOrigin: "left" }, "-=0.65");
      }, pageRef.current);
      cleanup = () => context.revert();
    });

    return () => cleanup?.();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-paper text-ink">
      <div ref={loaderRef} className="fixed inset-0 z-50 bg-ink" aria-hidden="true" />

      <aside className="relative z-10 flex w-full flex-col border-b border-line bg-paper p-5 md:fixed md:inset-y-0 md:left-0 md:w-72 md:border-b-0 md:border-r md:p-8">
        <div data-reveal>
          <img src={portrait} alt="Portrait of Julian Thorne" width={512} height={512} loading="eager" className="mb-5 size-16 rounded-md object-cover grayscale" />
          <h1 className="text-lg font-medium tracking-tight">{PORTFOLIO_DATA.name}</h1>
          <p className="mt-1 text-sm text-muted">{PORTFOLIO_DATA.role}</p>
        </div>

        <nav className="mt-8 flex gap-5 overflow-x-auto pb-1 text-sm md:mt-12 md:block md:space-y-3 md:overflow-visible" aria-label="Primary navigation" data-reveal>
          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-muted md:block md:mb-5">Index</span>
          <a href="#works" className="shrink-0 transition-colors hover:text-vermillion">Selected works</a>
          <a href="#information" className="shrink-0 transition-colors hover:text-vermillion">Information</a>
          <a href="#experience" className="shrink-0 transition-colors hover:text-vermillion">Experience</a>
          <a href="#contact" className="shrink-0 transition-colors hover:text-vermillion">Contact</a>
        </nav>

        <div className="mt-8 grid grid-cols-2 gap-5 border-t border-line pt-5 text-xs md:mt-auto md:block md:space-y-6 md:border-t-0 md:pt-0" data-reveal>
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-wider text-muted">Currently</p>
            <p className="leading-relaxed">Independent designer<br />{PORTFOLIO_DATA.location}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-wider text-muted">Availability</p>
            <p className="flex items-start gap-2 leading-relaxed"><span className="pulse-mark mt-1 size-1.5 shrink-0 rounded-full bg-vermillion" />{PORTFOLIO_DATA.availability}</p>
          </div>
        </div>

        <a href={`mailto:${PORTFOLIO_DATA.email}`} className="mt-7 flex items-center justify-between rounded-md bg-ink px-3 py-2.5 text-sm text-paper transition-transform hover:-translate-y-0.5 md:mt-8" data-reveal>
          <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-vermillion" /> Inquire</span>
          <ArrowUpRight size={15} strokeWidth={1.5} />
        </a>

        <div className="mt-4 flex gap-4 text-muted" data-reveal>
          <a href={PORTFOLIO_DATA.behance} target="_blank" rel="noreferrer" aria-label="Behance" className="transition-colors hover:text-vermillion">Be</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="transition-colors hover:text-vermillion"><Instagram size={14} strokeWidth={1.5} /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-vermillion"><Linkedin size={14} strokeWidth={1.5} /></a>
          <a href={`mailto:${PORTFOLIO_DATA.email}`} aria-label="Email" className="transition-colors hover:text-vermillion"><Mail size={14} strokeWidth={1.5} /></a>
        </div>
      </aside>

      <main className="md:ml-72">
        <section className="border-b border-line px-5 pb-20 pt-20 md:px-16 md:pb-24 md:pt-32" data-reveal>
          <div className="max-w-[56ch]">
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-vermillion">Visual communication / 2024</p>
            <h2 className="font-serif text-5xl italic leading-[0.95] md:text-7xl">{PORTFOLIO_DATA.intro}</h2>
            <p className="mt-10 max-w-[46ch] text-lg leading-relaxed text-muted">{PORTFOLIO_DATA.bio}</p>
          </div>
        </section>

        <section id="works" className="scroll-mt-8 px-5 py-20 md:px-16 md:py-24">
          <div className="mb-14 flex items-end justify-between gap-6" data-reveal>
            <h3 className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">Selected projects / 2022–2024</h3>
            <span className="hidden font-mono text-[10px] text-muted sm:block">Collected works vol. II</span>
          </div>

          <div className="grid grid-cols-1 gap-x-12 gap-y-20 md:grid-cols-12 md:gap-y-32">
            {PORTFOLIO_DATA.projects.map((project, index) => (
              <article key={project.number} className={`${project.layout === "large" ? "md:col-span-8" : project.layout === "tall" ? "md:col-span-4" : "md:col-span-7 md:-mt-20"} group`} data-reveal>
                <a href={project.href} target="_blank" rel="noreferrer" className="block" aria-label={`View ${project.title} on Behance`}>
                  <div className="mb-6 overflow-hidden rounded-md bg-surface" data-line>
                    <img src={project.image} alt={`${project.title} project artwork`} width={project.layout === "large" ? 1200 : project.layout === "wide" ? 1000 : 800} height={project.layout === "large" ? 800 : project.layout === "wide" ? 600 : 1000} loading="lazy" className={`w-full object-cover transition duration-700 ease-out group-hover:scale-[1.025] ${project.layout === "large" ? "aspect-[3/2]" : project.layout === "wide" ? "aspect-[16/10]" : "aspect-[4/5]"}`} />
                  </div>
                </a>
                <div className="flex items-start justify-between gap-5">
                  <div className="max-w-[40ch]">
                    <h4 className="font-serif text-2xl italic">{project.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-muted">{project.category}</p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-2">
                    <span className="font-mono text-[10px] text-muted">[ {String(index + 1).padStart(2, "0")} ]</span>
                    <a href={project.href} target="_blank" rel="noreferrer" className="border-b border-ink pb-0.5 text-xs transition-colors hover:border-vermillion hover:text-vermillion">Behance</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="information" className="scroll-mt-8 border-t border-line px-5 py-20 md:px-16 md:py-32" data-reveal>
          <div className="grid gap-14 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <h3 className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">Information</h3>
            </div>
            <div className="md:col-span-8">
              <p className="max-w-[48ch] font-serif text-3xl italic leading-tight">Design is the quiet structure that lets a good idea stay clear.</p>
              <div data-line className="mt-12 h-px w-full bg-line" />
              <div className="mt-12 grid gap-10 sm:grid-cols-2">
                <ExpertiseGroup title="Direction" items={PORTFOLIO_DATA.expertise.direction} />
                <ExpertiseGroup title="Technical" items={PORTFOLIO_DATA.expertise.technical} />
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-8 border-t border-line px-5 py-20 md:px-16 md:py-32" data-reveal>
          <div className="grid gap-14 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <h3 className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">Selected experience</h3>
            </div>
            <div className="space-y-14 md:col-span-8">
              {PORTFOLIO_DATA.experience.map((item) => (
                <div key={item.studio}>
                  <div className="grid gap-2 sm:flex sm:items-baseline sm:justify-between">
                    <div><h4 className="text-lg font-medium">{item.studio}</h4><p className="mt-1 text-sm text-muted">{item.role}</p></div>
                    <span className="font-mono text-[10px] text-muted">{item.years}</span>
                  </div>
                  <p className="mt-4 max-w-[48ch] text-sm leading-relaxed text-muted">{item.detail}</p>
                </div>
              ))}
              <div className="border-t border-line pt-12">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Education</p>
                <h4 className="mt-6 text-lg font-medium">BFA in Graphic Design</h4>
                <p className="mt-1 text-sm text-muted">Royal Academy of Art, The Hague</p>
              </div>
            </div>
          </div>
        </section>

        <footer id="contact" className="scroll-mt-8 flex flex-col gap-8 border-t border-line px-5 py-10 text-[10px] uppercase tracking-widest text-muted sm:flex-row sm:items-center sm:justify-between md:px-16" data-reveal>
          <div className="flex flex-wrap gap-x-8 gap-y-2"><span>© 2024 {PORTFOLIO_DATA.name}</span><span>Available globally</span></div>
          <div className="flex gap-7 font-medium"><a href={PORTFOLIO_DATA.behance} target="_blank" rel="noreferrer" className="transition-colors hover:text-vermillion">Behance</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="transition-colors hover:text-vermillion">Instagram</a><a href={`mailto:${PORTFOLIO_DATA.email}`} className="transition-colors hover:text-vermillion">Email</a></div>
        </footer>
      </main>
    </div>
  );
}

function ExpertiseGroup({ title, items }: { title: string; items: string[] }) {
  return <div><p className="mb-4 font-mono text-[10px] uppercase tracking-wider text-muted">{title}</p><ul className="space-y-2 text-sm text-muted">{items.map((item) => <li key={item}>{item}</li>)}</ul></div>;
}