import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Download, Linkedin } from "lucide-react";
import { useEffect, useRef } from "react";

import afterEffectsIcon from "@/assets/brand-icons/after-effects.svg.asset.json";
import chatgptIcon from "@/assets/brand-icons/chatgpt.svg.asset.json";
import claudeIcon from "@/assets/brand-icons/claude.svg.asset.json";
import dalleIcon from "@/assets/brand-icons/dalle.svg.asset.json";
import figmaIcon from "@/assets/brand-icons/figma.svg.asset.json";
import filmoraIcon from "@/assets/brand-icons/filmora.svg.asset.json";
import googleFlowIcon from "@/assets/brand-icons/google-flow.svg.asset.json";
import googleVidsIcon from "@/assets/brand-icons/google-vids.svg.asset.json";
import grokIcon from "@/assets/brand-icons/grok.svg.asset.json";
import illustratorIcon from "@/assets/brand-icons/illustrator.svg.asset.json";
import midjourneyIcon from "@/assets/brand-icons/midjourney.svg.asset.json";
import photoshopIcon from "@/assets/brand-icons/photoshop.svg.asset.json";
import premiereIcon from "@/assets/brand-icons/premiere-pro.svg.asset.json";
import portrait from "@/assets/profile-portrait.jpg";
import auraImage from "@/assets/project-aura.jpg";
import floraImage from "@/assets/project-flora.jpg";
import modulImage from "@/assets/project-modul.jpg";
import vesperImage from "@/assets/project-vesper.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saptanshu Raha — Graphic Designer" },
      { name: "description", content: "Saptanshu Raha is a graphic designer in Kolkata creating social media creatives, brand visuals, and infographics for technology brands." },
      { property: "og:title", content: "Saptanshu Raha — Graphic Designer" },
      { property: "og:description", content: "Social media creatives, brand visuals, and infographics that make complex technology clear." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

// Edit this single object to change the profile, projects, experience, and links.
const PORTFOLIO_DATA = {
  name: "Saptanshu Raha",
  role: "Graphic Designer",
  location: "Kolkata, India",
  availability: "Available for select projects",
  email: "hello@saptanshuraha.design",
  intro: "From pixels and posters to products and experiences.",
  bio: "I started as a graphic designer, learning to communicate ideas through visuals. Working across digital campaigns, websites, and interfaces changed the way I think about design — today I create work that is clear, intuitive, and purposeful.",
  behance: "https://www.behance.net/",
  linkedin: "https://www.linkedin.com/",
  cv: "/saptanshu-raha-cv.pdf",
  projects: [
    {
      title: "B2B Tech Campaigns",
      category: "Social media & campaign design",
      description: "LinkedIn creatives, carousel posts, and campaign visuals that translate AI, software, and digital transformation into accessible content.",
      image: vesperImage,
      number: "01",
      href: "https://www.behance.net/",
    },
    {
      title: "Tech Infographic Series",
      category: "Infographic & information design",
      description: "Infographic-style content explaining emerging technologies through visual hierarchy and structured storytelling for B2B audiences.",
      image: floraImage,
      number: "02",
      href: "https://www.behance.net/",
    },
    {
      title: "Brand Marketing Creatives",
      category: "Brand & marketing design",
      description: "Brand-consistent social and promotional graphics for technology businesses, adapted to different identities and marketing goals.",
      image: auraImage,
      number: "03",
      href: "https://www.behance.net/",
    },
    {
      title: "Book Cover Design",
      category: "Editorial & cover design",
      description: "Visually engaging book covers shaped by subject, genre, and each author's requirements.",
      image: modulImage,
      number: "04",
      href: "https://www.behance.net/",
    },
  ],
  experience: [
    {
      studio: "SentientGeeks",
      role: "Graphic Designer",
      years: "Kolkata, India — Present",
      detail: "Designing social media creatives, LinkedIn carousels, infographics, and campaign assets that turn complex AI and software topics into clear visual stories for B2B audiences.",
    },
    {
      studio: "Sourcedesk Global",
      role: "Jr. Graphic Designer",
      years: "Kolkata, India",
      detail: "Created social media creatives, book covers, banners, and infographics for clients across industries — working directly with them to deliver customized design solutions.",
    },
  ],
  clients: ["SentientGeeks", "ConvexSol", "RPM DXB", "TapApp"],
  expertise: {
    tools: [
      { name: "Figma", detail: "UI design, prototyping, design systems", icon: figmaIcon.url },
      { name: "Adobe Photoshop", detail: "Photo editing, compositing, digital art", icon: photoshopIcon.url },
      { name: "Adobe Illustrator", detail: "Illustration, logo design, branding", icon: illustratorIcon.url },
      { name: "Adobe Premiere Pro", detail: "Video editing, post-production", icon: premiereIcon.url },
      { name: "Adobe After Effects", detail: "Motion graphics, visual effects", icon: afterEffectsIcon.url },
      { name: "Wondershare Filmora", detail: "Quick video editing, social cuts", icon: filmoraIcon.url },
    ],
    aiTools: [
      { name: "ChatGPT", detail: "Ideation, writing, research", icon: chatgptIcon.url },
      { name: "Midjourney", detail: "Image generation, concept visuals", icon: midjourneyIcon.url },
      { name: "DALL·E", detail: "AI image generation, visual exploration", icon: dalleIcon.url },
      { name: "Google Flow", detail: "AI video generation, creative production", icon: googleFlowIcon.url },
      { name: "Grok", detail: "Research, ideas & exploration", icon: grokIcon.url },
      { name: "Claude", detail: "Writing, analysis & ideation", icon: claudeIcon.url },
      { name: "Google Vids", detail: "AI video creation, presentation", icon: googleVidsIcon.url },
    ],
    skills: [
      { name: "Graphic Design", detail: "Visual communication, layout, composition" },
      { name: "UI Design", detail: "Interface design, components, visual systems" },
      { name: "Social Media Design", detail: "Campaigns, carousels, promotional creatives" },
      { name: "Branding", detail: "Logo design, brand identity, visual consistency" },
      { name: "Website Design", detail: "Landing pages, marketing websites, UI visuals" },
      { name: "Infographic Design", detail: "Data visualization, information design" },
      { name: "Presentation Design", detail: "Pitch decks, business presentations" },
      { name: "Video Editing", detail: "Editing, motion graphics, post-production" },
      { name: "Photography", detail: "Product, lifestyle, event photography" },
      { name: "Videography", detail: "Shooting, editing, visual storytelling" },
      { name: "Podcast Production", detail: "Audio-visual recording, setup, editing" },
      { name: "Event Production", detail: "Event coverage, candid photography & video" },
      { name: "AI-Assisted Design", detail: "AI image/video generation, concept development" },
      { name: "Problem Solving", detail: "Creative thinking, visual storytelling, iteration" },
    ],
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
          <img src={portrait} alt={`Portrait of ${PORTFOLIO_DATA.name}`} width={512} height={512} loading="eager" className="mb-5 size-16 rounded-md object-cover grayscale" />
          <h1 className="text-lg font-medium tracking-tight">{PORTFOLIO_DATA.name}</h1>
          <p className="mt-1 text-sm text-muted">{PORTFOLIO_DATA.role}</p>
        </div>

        <nav className="mt-8 grid grid-cols-2 gap-x-5 gap-y-3 text-[13px] md:mt-12 md:block md:space-y-3" aria-label="Primary navigation" data-reveal>
          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-muted md:block md:mb-5">Index</span>
          <a href="#works" className="block transition-colors hover:text-vermillion">Selected works</a>
          <a href="#information" className="block transition-colors hover:text-vermillion">Information</a>
          <a href="#experience" className="block transition-colors hover:text-vermillion">Experience</a>
          <a href="#contact" className="block transition-colors hover:text-vermillion">Contact</a>
        </nav>

        <div className="mt-8 grid grid-cols-2 gap-5 border-t border-line pt-5 text-xs md:mt-auto md:block md:space-y-6 md:border-t-0 md:pt-0" data-reveal>
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-wider text-muted">Currently</p>
            <p className="leading-relaxed">Graphic designer<br />{PORTFOLIO_DATA.location}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-wider text-muted">Availability</p>
            <p className="flex items-start gap-2 leading-relaxed"><span className="pulse-mark mt-1 size-1.5 shrink-0 rounded-full bg-vermillion" />{PORTFOLIO_DATA.availability}</p>
          </div>
        </div>

        <a href={`mailto:${PORTFOLIO_DATA.email}`} className="mt-7 flex items-center justify-between rounded-md bg-ink px-3 py-2.5 text-[13px] text-paper transition-transform hover:-translate-y-0.5 md:mt-8" data-reveal>
          <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-vermillion" /> Inquire</span>
          <ArrowUpRight size={15} strokeWidth={1.5} />
        </a>

        <div className="mt-4 flex items-center gap-4 text-muted" data-reveal>
          <a href={PORTFOLIO_DATA.behance} target="_blank" rel="noreferrer" aria-label="Behance" className="transition-colors hover:text-vermillion">Be</a>
          <a href={PORTFOLIO_DATA.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-vermillion"><Linkedin size={14} strokeWidth={1.5} /></a>
          <a href={PORTFOLIO_DATA.cv} download className="ml-auto flex items-center gap-1.5 text-[11px] transition-colors hover:text-vermillion" aria-label="Download CV"><Download size={13} strokeWidth={1.5} /> CV</a>
        </div>
      </aside>

      <main className="md:ml-72">
        <section className="border-b border-line px-5 pb-16 pt-16 md:px-12 md:pb-20 md:pt-24 lg:px-16 lg:pt-28" data-reveal>
          <div className="max-w-[56ch]">
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-vermillion">Design journey / 2026</p>
            <h2 className="font-serif text-4xl italic leading-[1.02] sm:text-5xl lg:text-6xl">{PORTFOLIO_DATA.intro}</h2>
            <p className="mt-8 max-w-[46ch] text-base leading-relaxed text-muted">{PORTFOLIO_DATA.bio}</p>
          </div>
        </section>

        <section id="works" className="scroll-mt-8 px-5 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
          <div className="mb-14 flex items-end justify-between gap-6" data-reveal>
            <h3 className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">Selected projects</h3>
            <span className="hidden font-mono text-[10px] text-muted sm:block">Collected works vol. I</span>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2 lg:gap-x-8 xl:grid-cols-3">
            {PORTFOLIO_DATA.projects.map((project, index) => (
              <article key={project.number} className="group min-w-0" data-reveal>
                <a href={project.href} target="_blank" rel="noreferrer" className="block" aria-label={`View ${project.title} on Behance`}>
                  <div className="mb-6 overflow-hidden rounded-md bg-surface" data-line>
                    <img src={project.image} alt={`${project.title} project artwork`} width={900} height={1080} loading="lazy" className="aspect-[5/6] w-full object-cover transition duration-700 ease-out group-hover:scale-[1.025]" />
                  </div>
                </a>
                <div className="flex items-start justify-between gap-5">
                  <div className="max-w-[40ch]">
                    <h4 className="font-serif text-xl italic">{project.title}</h4>
                    <p className="mt-2 text-[13px] leading-relaxed text-muted">{project.description}</p>
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

        <section id="information" className="scroll-mt-8 border-t border-line px-5 py-16 md:px-12 md:py-24 lg:px-16" data-reveal>
          <div className="grid gap-10 lg:grid-cols-[minmax(120px,0.42fr)_minmax(0,2.58fr)] lg:gap-14">
            <h3 className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">Information</h3>
            <div>
              <p className="font-serif text-2xl italic leading-tight md:text-[28px]">Good ideas deserve the right tools, skills, and perspective.</p>
              <div data-line className="mt-8 h-px w-full bg-line md:mt-10" />
              <div className="mt-9 grid gap-12 xl:grid-cols-3 xl:gap-10">
                <div>
                  <p className="mb-6 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">Tools &amp; software</p>
                  <ul className="space-y-3.5">
                    {PORTFOLIO_DATA.expertise.tools.map((tool) => (
                      <li key={tool.name} className="grid grid-cols-[24px_minmax(0,1fr)] items-center gap-3 text-[13px]">
                        <span className="flex size-6 items-center justify-center" aria-hidden="true">
                          <img src={tool.icon} alt="" width={24} height={24} loading="lazy" className="size-6 object-contain" />
                        </span>
                        <span className="min-w-0">
                          <span className="block font-medium text-ink">{tool.name}</span>
                          <span className="mt-0.5 block text-xs leading-relaxed text-muted">{tool.detail}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-line pt-9 xl:border-l xl:border-t-0 xl:pl-10 xl:pt-0">
                  <p className="mb-6 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">AI tools</p>
                  <ul className="space-y-3.5">
                    {PORTFOLIO_DATA.expertise.aiTools.map((tool) => (
                      <li key={tool.name} className="grid grid-cols-[24px_minmax(0,1fr)] items-center gap-3 text-[13px]">
                        <span className="flex size-6 items-center justify-center" aria-hidden="true">
                          <img src={tool.icon} alt="" width={24} height={24} loading="lazy" className="size-6 object-contain" />
                        </span>
                        <span className="min-w-0">
                          <span className="block font-medium text-ink">{tool.name}</span>
                          <span className="mt-0.5 block text-xs leading-relaxed text-muted">{tool.detail}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-line pt-9 xl:border-l xl:border-t-0 xl:pl-10 xl:pt-0">
                  <p className="mb-6 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">Skills</p>
                  <ul className="space-y-3.5">
                    {PORTFOLIO_DATA.expertise.skills.map((skill) => (
                      <li key={skill.name} className="text-[13px]">
                        <span className="block font-medium text-ink">{skill.name}</span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-muted">{skill.detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-8 border-t border-line px-5 py-16 md:px-12 md:py-24 lg:px-16" data-reveal>
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
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Selected clients</p>
                <p className="mt-6 font-serif text-2xl italic leading-snug md:text-[28px]">{PORTFOLIO_DATA.clients.join(" · ")}</p>
              </div>
            </div>
          </div>
        </section>

        <footer id="contact" className="scroll-mt-8 flex flex-col gap-8 border-t border-line px-5 py-10 text-[10px] uppercase tracking-widest text-muted sm:flex-row sm:items-center sm:justify-between md:px-12 lg:px-16" data-reveal>
          <div className="flex flex-wrap gap-x-8 gap-y-2"><span>© 2026 {PORTFOLIO_DATA.name}</span><span>Available globally</span></div>
          <div className="flex gap-7 font-medium"><a href={PORTFOLIO_DATA.behance} target="_blank" rel="noreferrer" className="transition-colors hover:text-vermillion">Behance</a><a href={PORTFOLIO_DATA.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-vermillion">LinkedIn</a><a href={PORTFOLIO_DATA.cv} download className="transition-colors hover:text-vermillion">Download CV</a></div>
        </footer>
      </main>
    </div>
  );
}
