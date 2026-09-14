import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Download, Linkedin } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";

import { TextAnimate } from "@/components/ui/text-animate";
import { HyperText } from "@/components/ui/hyper-text";
import { LogoCloudBlock } from "@/components/ui/logo-cloud-3";
import { PixelLiquidBg } from "@/components/ui/pixel-liquid-bg";
import { useTheme } from "@/components/theme-provider";

import afterEffectsIcon from "@/assets/brand-icons/after-effects.svg";
import chatgptIcon from "@/assets/brand-icons/chatgpt.svg";
import claudeIcon from "@/assets/brand-icons/claude.svg";
import dalleIcon from "@/assets/brand-icons/dalle.svg";
import figmaIcon from "@/assets/brand-icons/figma.svg";
import filmoraIcon from "@/assets/brand-icons/filmora.svg";
import googleFlowIcon from "@/assets/brand-icons/google-flow.svg";
import googleVidsIcon from "@/assets/brand-icons/google-vids.svg";
import grokIcon from "@/assets/brand-icons/grok.svg";
import illustratorIcon from "@/assets/brand-icons/illustrator.svg";
import midjourneyIcon from "@/assets/brand-icons/midjourney.svg";
import photoshopIcon from "@/assets/brand-icons/photoshop.svg";
import premiereIcon from "@/assets/brand-icons/premiere-pro.svg";
import portrait from "@/images/profilepic.png";
import image1 from "@/images/image 1.png";
import image2 from "@/images/image 2.png";
import image3 from "@/images/image 3.png";
import modulImage from "@/assets/project-modul.jpg";
import vesperImage from "@/assets/project-vesper.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saptanshu Raha — Graphic Designer" },
      {
        name: "description",
        content:
          "Saptanshu Raha is a graphic designer in Kolkata creating social media creatives, brand visuals, and infographics for technology brands.",
      },
      { property: "og:title", content: "Saptanshu Raha — Graphic Designer" },
      {
        property: "og:description",
        content:
          "Social media creatives, brand visuals, and infographics that make complex technology clear.",
      },
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
  cv: "https://drive.google.com/file/d/1rbMtMdESjgH1n-y7BMUIVar6H4bLY_Xf/view",
  projects: [
    {
      title: "B2B Tech Campaigns",
      category: "Social media & campaign design",
      description:
        "LinkedIn creatives, carousel posts, and campaign visuals that translate AI, software, and digital transformation into accessible content.",
      image: image1,
      number: "01",
      href: "https://www.behance.net/",
    },
    {
      title: "Tech Infographic Series",
      category: "Infographic & information design",
      description:
        "Infographic-style content explaining emerging technologies through visual hierarchy and structured storytelling for B2B audiences.",
      image: image2,
      number: "02",
      href: "https://www.behance.net/",
    },
    {
      title: "Brand Marketing Creatives",
      category: "Brand & marketing design",
      description:
        "Brand-consistent social and promotional graphics for technology businesses, adapted to different identities and marketing goals.",
      image: image3,
      number: "03",
      href: "https://www.behance.net/",
    },
    {
      title: "Book Cover Design",
      category: "Editorial & cover design",
      description:
        "Visually engaging book covers shaped by subject, genre, and each author's requirements.",
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
      detail:
        "Designing social media creatives, LinkedIn carousels, infographics, and campaign assets that turn complex AI and software topics into clear visual stories for B2B audiences.",
    },
    {
      studio: "Sourcedesk Global",
      role: "Jr. Graphic Designer",
      years: "Kolkata, India",
      detail:
        "Created social media creatives, book covers, banners, and infographics for clients across industries — working directly with them to deliver customized design solutions.",
    },
  ],
  clients: ["SentientGeeks", "ConvexSol", "RPM DXB", "TapApp"],
  expertise: {
    tools: [
      { name: "Figma", detail: "UI design, prototyping, design systems", icon: figmaIcon },
      {
        name: "Adobe Photoshop",
        detail: "Photo editing, compositing, digital art",
        icon: photoshopIcon,
      },
      {
        name: "Adobe Illustrator",
        detail: "Illustration, logo design, branding",
        icon: illustratorIcon,
      },
      { name: "Adobe Premiere Pro", detail: "Video editing, post-production", icon: premiereIcon },
      {
        name: "Adobe After Effects",
        detail: "Motion graphics, visual effects",
        icon: afterEffectsIcon,
      },
      {
        name: "Wondershare Filmora",
        detail: "Quick video editing, social cuts",
        icon: filmoraIcon,
      },
      { name: "ChatGPT", detail: "Ideation, writing, research", icon: chatgptIcon },
      { name: "Midjourney", detail: "Image generation, concept visuals", icon: midjourneyIcon },
      { name: "DALL·E", detail: "AI image generation, visual exploration", icon: dalleIcon },
      {
        name: "Google Flow",
        detail: "AI video generation, creative production",
        icon: googleFlowIcon,
      },
      { name: "Grok", detail: "Research, ideas & exploration", icon: grokIcon },
      { name: "Claude", detail: "Writing, analysis & ideation", icon: claudeIcon },
      { name: "Google Vids", detail: "AI video creation, presentation", icon: googleVidsIcon },
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
  const { theme } = useTheme();
  const pageRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    void import("gsap").then(({ gsap }) => {
      if (!pageRef.current || !loaderRef.current) return;
      const context = gsap.context(() => {
        const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });
        timeline
          .to(loaderRef.current, { clipPath: "inset(0 0 100% 0)", duration: 0.45, delay: 0.05 })
          .fromTo(
            "[data-reveal]",
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.4, stagger: 0.04 },
            "-=0.25",
          )
          .fromTo(
            "[data-line]",
            { scaleX: 0 },
            { scaleX: 1, duration: 0.45, transformOrigin: "left" },
            "-=0.3",
          );
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
          <img
            src={portrait}
            alt={`Portrait of ${PORTFOLIO_DATA.name}`}
            width={512}
            height={512}
            loading="eager"
            className="mb-5 size-16 rounded-md object-cover"
          />
          <TextAnimate
            animation="blurInUp"
            by="word"
            as="h1"
            className="text-lg font-medium tracking-tight"
            delay={0.2}
          >
            {PORTFOLIO_DATA.name}
          </TextAnimate>
          <TextAnimate
            animation="blurInUp"
            by="word"
            as="p"
            className="mt-1 text-sm text-muted"
            delay={0.3}
          >
            {PORTFOLIO_DATA.role}
          </TextAnimate>
        </div>

        <nav
          className="mt-8 grid grid-cols-2 gap-x-5 gap-y-3 text-[13px] md:mt-12 md:block md:space-y-3"
          aria-label="Primary navigation"
          data-reveal
        >
          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-muted md:block md:mb-5">
            Index
          </span>
          <a href="#works" className="group block text-ink transition-colors hover:text-vermillion">
            <HyperText
              as="span"
              duration={450}
              animateOnMount={false}
              className="inline-block transition-colors group-hover:text-vermillion"
            >
              Selected works
            </HyperText>
          </a>
          <a
            href="#information"
            className="group block text-ink transition-colors hover:text-vermillion"
          >
            <HyperText
              as="span"
              duration={400}
              animateOnMount={false}
              className="inline-block transition-colors group-hover:text-vermillion"
            >
              Information
            </HyperText>
          </a>
          <a
            href="#experience"
            className="group block text-ink transition-colors hover:text-vermillion"
          >
            <HyperText
              as="span"
              duration={400}
              animateOnMount={false}
              className="inline-block transition-colors group-hover:text-vermillion"
            >
              Experience
            </HyperText>
          </a>
          <a
            href="#contact"
            className="group block text-ink transition-colors hover:text-vermillion"
          >
            <HyperText
              as="span"
              duration={350}
              animateOnMount={false}
              className="inline-block transition-colors group-hover:text-vermillion"
            >
              Contact
            </HyperText>
          </a>
        </nav>

        <div
          className="mt-8 grid grid-cols-2 gap-5 border-t border-line pt-5 text-xs md:mt-auto md:block md:space-y-6 md:border-t-0 md:pt-0"
          data-reveal
        >
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-wider text-muted">Currently</p>
            <p className="leading-relaxed">
              Graphic designer
              <br />
              {PORTFOLIO_DATA.location}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-wider text-muted">Availability</p>
            <p className="flex items-start gap-2 leading-relaxed">
              <span className="pulse-mark mt-1 size-1.5 shrink-0 rounded-full bg-vermillion" />
              {PORTFOLIO_DATA.availability}
            </p>
          </div>
        </div>

        <a
          href={`mailto:${PORTFOLIO_DATA.email}`}
          className="mt-7 flex items-center justify-between rounded-md bg-ink px-3 py-2.5 text-[13px] text-paper transition-transform hover:-translate-y-0.5 md:mt-8"
          data-reveal
        >
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-vermillion" /> Inquire
          </span>
          <ArrowUpRight size={15} strokeWidth={1.5} />
        </a>

        <div className="mt-4 flex items-center gap-4 text-muted" data-reveal>
          <a
            href={PORTFOLIO_DATA.behance}
            target="_blank"
            rel="noreferrer"
            aria-label="Behance"
            className="transition-colors hover:text-vermillion"
          >
            Be
          </a>
          <a
            href={PORTFOLIO_DATA.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-vermillion"
          >
            <Linkedin size={14} strokeWidth={1.5} />
          </a>
          <a
            href={PORTFOLIO_DATA.cv}
            target="_blank"
            rel="noreferrer"
            className="ml-auto flex items-center gap-1.5 text-[11px] transition-colors hover:text-vermillion"
            aria-label="Download CV"
          >
            <Download size={13} strokeWidth={1.5} /> CV
          </a>
        </div>
      </aside>

      <main className="md:ml-72">
        <section
          className="relative overflow-hidden border-b border-line px-5 pb-16 pt-16 md:px-12 md:pb-20 md:pt-24 lg:px-16 lg:pt-28"
          data-reveal
        >
          <PixelLiquidBg
            className="pointer-events-none absolute inset-0 size-full"
            pixelSize={14}
            resolution={0.4}
            mouseForce={9}
            cursorSize={120}
            autoDemo={true}
          />
          <div className="relative z-10 max-w-[56ch]">
            <TextAnimate
              animation="fadeIn"
              by="character"
              as="p"
              className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-vermillion"
              delay={0.15}
            >
              Design journey / 2026
            </TextAnimate>
            <TextAnimate
              animation="blurInUp"
              by="word"
              as="h2"
              className="font-serif text-4xl italic leading-[1.02] sm:text-5xl lg:text-6xl"
              delay={0.25}
              duration={0.8}
            >
              {PORTFOLIO_DATA.intro}
            </TextAnimate>
            <TextAnimate
              animation="blurInUp"
              by="word"
              as="p"
              className="mt-8 max-w-[46ch] text-base leading-relaxed text-muted"
              delay={0.45}
              duration={0.7}
            >
              {PORTFOLIO_DATA.bio}
            </TextAnimate>
          </div>
        </section>

        <section id="works" className="scroll-mt-8 px-5 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
          <div className="mb-14 flex items-end justify-between gap-6" data-reveal>
            <TextAnimate
              animation="blurInUp"
              by="word"
              as="h3"
              className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted"
            >
              Selected projects
            </TextAnimate>
            <TextAnimate
              animation="blurInUp"
              by="word"
              as="span"
              className="hidden font-mono text-[10px] text-muted sm:block"
            >
              Collected works vol. I
            </TextAnimate>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2 lg:gap-x-8 xl:grid-cols-3">
            {PORTFOLIO_DATA.projects.map((project, index) => (
              <article key={project.number} className="group min-w-0" data-reveal>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                  aria-label={`View ${project.title} on Behance`}
                >
                  <div className="mb-6 overflow-hidden rounded-md bg-surface" data-line>
                    <img
                      src={project.image}
                      alt={`${project.title} project artwork`}
                      width={900}
                      height={1080}
                      loading="lazy"
                      className="aspect-[5/6] w-full object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
                    />
                  </div>
                </a>
                <div className="flex items-start justify-between gap-5">
                  <div className="max-w-[40ch]">
                    <TextAnimate
                      animation="blurInUp"
                      by="word"
                      as="h4"
                      className="font-serif text-xl italic"
                      delay={0.05}
                    >
                      {project.title}
                    </TextAnimate>
                    <TextAnimate
                      animation="blurInUp"
                      by="word"
                      as="p"
                      className="mt-2 text-[13px] leading-relaxed text-muted"
                      delay={0.1}
                    >
                      {project.description}
                    </TextAnimate>
                    <TextAnimate
                      animation="blurInUp"
                      by="word"
                      as="p"
                      className="mt-3 font-mono text-[10px] uppercase tracking-wider text-muted"
                      delay={0.15}
                    >
                      {project.category}
                    </TextAnimate>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-2">
                    <span className="font-mono text-[10px] text-muted">
                      [ {String(index + 1).padStart(2, "0")} ]
                    </span>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="border-b border-ink pb-0.5 text-xs transition-colors hover:border-vermillion hover:text-vermillion"
                    >
                      Behance
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="information"
          className="scroll-mt-8 border-t border-line px-5 py-16 md:px-12 md:py-24 lg:px-16"
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(120px,0.42fr)_minmax(0,2.58fr)] lg:gap-14">
            <TextAnimate
              animation="blurInUp"
              by="word"
              as="h3"
              className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted"
            >
              Information
            </TextAnimate>
            <div>
              <TextAnimate
                animation="blurInUp"
                by="word"
                as="p"
                className="font-serif text-2xl italic leading-tight md:text-[28px]"
                delay={0.1}
                duration={0.7}
              >
                Good ideas deserve the right tools, skills, and perspective.
              </TextAnimate>
              <motion.div
                className="mt-8 h-px w-full bg-line md:mt-10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "0px 0px -40px 0px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "left" }}
              />
              <div className="mt-9 grid gap-12 md:grid-cols-2 md:gap-10 lg:gap-14">
                <div>
                  <TextAnimate
                    animation="blurInUp"
                    by="word"
                    as="p"
                    className="mb-6 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted"
                  >
                    Tools & software
                  </TextAnimate>
                  <ul className="space-y-3.5">
                    {(PORTFOLIO_DATA.expertise?.tools ?? []).map((tool, index) => (
                      <li
                        key={tool.name}
                        className="grid grid-cols-[24px_minmax(0,1fr)] items-center gap-3 text-[13px]"
                      >
                        <motion.span
                          className="flex size-6 items-center justify-center"
                          aria-hidden="true"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, margin: "0px 0px -30px 0px" }}
                          transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.25) }}
                        >
                          <img
                            src={tool.icon}
                            alt=""
                            width={24}
                            height={24}
                            loading="lazy"
                            className="size-6 object-contain"
                          />
                        </motion.span>
                        <span className="min-w-0">
                          <TextAnimate
                            animation="blurInUp"
                            by="word"
                            as="span"
                            className="block font-medium text-ink"
                            delay={Math.min(index * 0.02, 0.25)}
                            duration={0.35}
                          >
                            {tool.name}
                          </TextAnimate>
                          <TextAnimate
                            animation="blurInUp"
                            by="word"
                            as="span"
                            className="mt-0.5 block text-xs leading-relaxed text-muted"
                            delay={Math.min(index * 0.02 + 0.03, 0.28)}
                            duration={0.35}
                          >
                            {tool.detail}
                          </TextAnimate>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-line pt-9 md:border-l md:border-t-0 md:pl-10 md:pt-0 lg:pl-14">
                  <TextAnimate
                    animation="blurInUp"
                    by="word"
                    as="p"
                    className="mb-6 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted"
                  >
                    Skills
                  </TextAnimate>
                  <ul className="space-y-3.5">
                    {(PORTFOLIO_DATA.expertise?.skills ?? []).map((skill, index) => (
                      <li key={skill.name} className="text-[13px]">
                        <TextAnimate
                          animation="blurInUp"
                          by="word"
                          as="span"
                          className="block font-medium text-ink"
                          delay={Math.min(index * 0.02, 0.25)}
                          duration={0.35}
                        >
                          {skill.name}
                        </TextAnimate>
                        <TextAnimate
                          animation="blurInUp"
                          by="word"
                          as="span"
                          className="mt-0.5 block text-xs leading-relaxed text-muted"
                          delay={Math.min(index * 0.02 + 0.03, 0.28)}
                          duration={0.35}
                        >
                          {skill.detail}
                        </TextAnimate>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="scroll-mt-8 border-t border-line px-5 py-16 md:px-12 md:py-24 lg:px-16"
        >
          <div className="grid gap-14 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <TextAnimate
                animation="blurInUp"
                by="word"
                as="h3"
                className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted"
              >
                Selected experience
              </TextAnimate>
            </div>
            <div className="space-y-14 md:col-span-8">
              {PORTFOLIO_DATA.experience.map((item, index) => (
                <div key={item.studio}>
                  <div className="grid gap-2 sm:flex sm:items-baseline sm:justify-between">
                    <div>
                      <TextAnimate
                        animation="blurInUp"
                        by="word"
                        as="h4"
                        className="text-lg font-medium"
                        delay={index * 0.06}
                      >
                        {item.studio}
                      </TextAnimate>
                      <TextAnimate
                        animation="blurInUp"
                        by="word"
                        as="p"
                        className="mt-1 text-sm text-muted"
                        delay={index * 0.06 + 0.03}
                      >
                        {item.role}
                      </TextAnimate>
                    </div>
                    <TextAnimate
                      animation="blurInUp"
                      by="word"
                      as="span"
                      className="font-mono text-[10px] text-muted"
                      delay={index * 0.06 + 0.03}
                    >
                      {item.years}
                    </TextAnimate>
                  </div>
                  <TextAnimate
                    animation="blurInUp"
                    by="word"
                    as="p"
                    className="mt-4 max-w-[48ch] text-sm leading-relaxed text-muted"
                    delay={index * 0.06 + 0.06}
                  >
                    {item.detail}
                  </TextAnimate>
                </div>
              ))}
              <div className="border-t border-line pt-12">
                <LogoCloudBlock title="Selected clients" />
              </div>
            </div>
          </div>
        </section>

        <footer
          id="contact"
          className="scroll-mt-8 flex flex-col gap-8 border-t border-line px-5 py-10 text-[10px] uppercase tracking-widest text-muted sm:flex-row sm:items-center sm:justify-between md:px-12 lg:px-16"
          data-reveal
        >
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <span>© 2026 {PORTFOLIO_DATA.name}</span>
            <span>Available globally</span>
          </div>
          <div className="flex gap-7 font-medium">
            <a
              href={PORTFOLIO_DATA.behance}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-vermillion"
            >
              Behance
            </a>
            <a
              href={PORTFOLIO_DATA.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-vermillion"
            >
              LinkedIn
            </a>
            <a
              href={PORTFOLIO_DATA.cv}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-vermillion"
            >
              Download CV
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
