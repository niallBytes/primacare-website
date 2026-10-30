import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Activity,
  ArrowRight,
  Award,
  Baby,
  CalendarCheck,
  ClipboardList,
  Bone,
  Brain,
  ChevronDown,
  Droplet,
  Droplets,
  Flower2,
  Gem,
  HeartPulse,
  Leaf,
  FlaskConical,
  MapPin,
  MessageSquareHeart,
  Menu,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Soup,
  Star,
  Stethoscope,
  Thermometer,
  UserRound,
  Users,
  Wind,
  X,
  type LucideIcon,
} from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";
import { conditions, waLink } from "@/lib/conditions";
import heroImage from "@/assets/treatment-skin.jpg";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { CountUp } from "@/components/site/CountUp";
import { CursorAmbience, Parallax, TiltCard } from "@/components/site/motion-3d";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Personalised Homoeopathic Care | PrimaCare Faridabad" },
      {
        name: "description",
        content:
          "Personalised homoeopathic care from Dr. Jerusha Kagita Holkar, with in-clinic and online consultations from PrimaCare in Faridabad.",
      },
      { property: "og:title", content: "Personalised Homoeopathic Care | PrimaCare Faridabad" },
      {
        property: "og:description",
        content: "A calm, listening-first approach to personalised homoeopathic care in Faridabad and online.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "Dr Jerusha's PrimaCare Homoeopathic Clinic",
          medicalSpecialty: "Homeopathic",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Sector 19, HUDA Market Part 2",
            addressLocality: "Faridabad",
            addressCountry: "IN",
          },
          telephone: "+91-9307011209",
          founder: {
            "@type": "Person",
            name: "Dr. Jerusha Kagita Holkar",
            identifier: "Reg. No. 72234",
          },
        }),
      },
    ],
  }),
});

const iconMap: Record<string, LucideIcon> = {
  Wind,
  Brain,
  Sparkles,
  Bone,
  Soup,
  Droplet,
  Gem,
  Activity,
  Droplets,
  HeartPulse,
  Flower2,
  Baby,
  Thermometer,
};

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#conditions", label: "Conditions We Treat" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CursorAmbience />
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <About />
        <Conditions />
        <Journey />
        <WhyHomeopathy />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyCTA />
    </div>
  );
}

/* ---------------- Navbar ---------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-background/75 shadow-soft border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 md:px-8 md:py-2.5">
        <a href="#home" className="group flex items-center gap-3 min-w-0">
          <img
            src="/images/logo.png"
            alt="PrimaCare Homoeopathic Clinic"
            className="h-[4.5rem] w-auto shrink-0 object-contain transition-transform duration-500 group-hover:scale-[1.03] sm:h-20 md:h-[5.75rem]"
          />
          <div className="hidden sm:flex flex-col leading-tight min-w-0">
            <span className="font-display font-bold text-primary text-sm truncate">
              Dr Jerusha's
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground truncate">
              PrimaCare Homoeopathic Clinic
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink("Hi, I'd like to book an appointment with Dr. Jerusha.")}
            target="_blank"
            rel="noreferrer"
            className="press sheen group inline-flex items-center gap-2 rounded-full bg-gradient-teal px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Book on WhatsApp</span>
            <span className="sm:hidden">Book</span>
          </a>
          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/80"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-md">
          <nav className="flex flex-col px-6 py-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium border-b border-border/40 last:border-0"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-hero pb-16 pt-32 md:pb-24 md:pt-40"
    >
      {/* Floating blobs — cursor parallax layers at different depths */}
      <Parallax depth={26} depthY={18} className="pointer-events-none absolute inset-0">
        <div
          className="pointer-events-none absolute -top-24 -left-20 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl animate-blob"
          style={{ background: "var(--gradient-sage)" }}
        />
      </Parallax>
      <Parallax depth={-14} depthY={-10} className="pointer-events-none absolute inset-0">
        <div
          className="pointer-events-none absolute -bottom-32 -right-16 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl animate-blob"
          style={{ background: "var(--gradient-teal)", animationDelay: "-8s" }}
        />
      </Parallax>
      <Parallax depth={10} depthY={7} className="pointer-events-none absolute inset-0">
        <div
          className="pointer-events-none absolute left-1/2 top-10 h-[320px] w-[320px] -translate-x-1/2 rounded-full opacity-25 blur-3xl animate-soft-float"
          style={{ background: "var(--gradient-sage)", animationDelay: "-5s" }}
        />
      </Parallax>

      <svg
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 w-full text-background"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z" fill="currentColor" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="max-w-2xl">
          <div className="animate-rise">
            <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-4 py-1.5 backdrop-blur-sm">
              <Leaf className="h-3.5 w-3.5" /> Homoeopathic Care · Faridabad
            </span>
          </div>
          <div className="animate-rise" style={{ animationDelay: "120ms" }}>
            <h1 className="mt-6 text-4xl font-display font-bold leading-[1.05] text-primary md:text-6xl">
              Personalised Homoeopathic Care
              <span className="block text-foreground/90">for Your Health</span>
            </h1>
          </div>
          <div className="animate-rise" style={{ animationDelay: "240ms" }}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Guided by <span className="font-semibold text-foreground">Dr. Jerusha Kagita Holkar</span>,
              Consultant Homeopath &nbsp;·&nbsp; Reg. No. 72234. Gentle, root-cause treatment plans
              tailored to you — in-clinic and online.
            </p>
          </div>
          <div className="animate-rise" style={{ animationDelay: "360ms" }}>
            <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row">
              <a
                href={waLink("Hi, I'd like to book an appointment with Dr. Jerusha.")}
                target="_blank"
                rel="noreferrer"
                className="press sheen group inline-flex items-center gap-2 rounded-full bg-gradient-teal px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-all duration-300 hover:-translate-y-1"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Book an Appointment — WhatsApp Now
              </a>
              <a
                href="#conditions"
                className="press group inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card/70 px-6 py-3.5 text-sm font-semibold text-primary backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-card hover:shadow-soft"
              >
                Explore Conditions We Treat
                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>

          </div>

          <div className="animate-rise relative" style={{ animationDelay: "180ms" }}>
            <Parallax depth={8} depthY={5} className="relative">
              <div className="absolute -inset-5 rounded-[2.25rem] bg-gradient-sage opacity-60 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-card/80 bg-card shadow-lift">
                <img
                  src={heroImage}
                  alt="Woman enjoying a calm, healthy wellness moment"
                  width={1200}
                  height={900}
                  className="h-[25rem] w-full object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-[31rem]"
                />
                <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-card/70 bg-card/85 p-4 backdrop-blur-md sm:inset-x-7 sm:bottom-7">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="eyebrow">A calmer way to care</div>
                      <p className="mt-1 text-sm text-foreground/75">Thoughtful guidance, tailored to your whole story.</p>
                    </div>
                    <Leaf className="h-7 w-7 shrink-0 text-primary/60" />
                  </div>
                </div>
              </div>
            </Parallax>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-5xl">

          {/* Trust strip */}
          <div className="mt-14 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
            {[
              { icon: ShieldCheck, label: "Reg. No. 72234" },
              { icon: Stethoscope, label: "Online Consultation Available" },
              { icon: Leaf, label: "Personalised Treatment Plans" },
            ].map((t, i) => (
              <Reveal key={t.label} delay={400 + i * 120}>
                <div className="flex items-center justify-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2.5 shadow-soft backdrop-blur-sm">
                  <t.icon className="h-4 w-4 text-primary" />
                  <span className="font-medium">{t.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  const values = [
    { icon: UserRound, title: "Personalised Care", text: "Detailed case-taking tailored to you." },
    { icon: Stethoscope, title: "Online + In-Clinic", text: "Consult from anywhere, or visit us." },
    { icon: Leaf, title: "Root-Cause Approach", text: "Treat causes, not just symptoms." },
    { icon: Users, title: "All Age Groups", text: "From children to seniors, safely." },
  ];
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <Reveal>
              <span className="eyebrow">About Your Doctor</span>
              <h2 className="mt-3 text-3xl font-display font-bold text-primary md:text-4xl">
                Dr. Jerusha Kagita Holkar
              </h2>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                Consultant Homeopath &nbsp;·&nbsp; Reg. No. 72234
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-base leading-relaxed text-foreground/80 md:text-lg">
                Dr. Jerusha brings a warm, listening-first approach to homoeopathy — combining
                careful, personalised case-taking with a focus on root cause and holistic
                wellbeing. Every treatment plan is designed around <em>you</em> — your body,
                your history, your lifestyle.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={150 + i * 100}>
                  <div className="lift group h-full rounded-[22px] border border-border bg-card p-4 shadow-soft hover:border-primary/30 hover:shadow-lift">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/50 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                      <v.icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="mt-3 font-display font-semibold text-foreground">{v.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{v.text}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <TiltCard max={3} glare={false} className="mx-auto w-full max-w-md">
            <div className="group relative lift">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-sage opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-50" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-teal-tint to-teal-soft shadow-lift">
                <div className="absolute inset-0 bg-card/60 opacity-60 [mask-image:radial-gradient(circle_at_30%_20%,black,transparent_55%)]" />
                <img
                  src="/images/doctor/dr-jerusha.jpeg"
                  alt="Dr. Jerusha Kagita Holkar"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 to-transparent p-5 text-primary-foreground">
                  <div className="font-display text-lg font-bold">Dr. Jerusha Kagita Holkar</div>
                  <div className="text-[11px] uppercase tracking-[0.16em] text-primary-foreground/85">
                    Consultant Homeopath
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 flex items-center gap-2 rounded-2xl bg-card px-4 py-3 shadow-lift border border-border transition-transform duration-500 group-hover:-translate-y-1">
                <Award className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Reg. No.</div>
                  <div className="font-display font-bold text-primary">72234</div>
                </div>
              </div>
            </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const conditionImages: Record<string, string> = {
  "allergic-rhinitis": "/images/conditions/allergic-rhinitis.jpeg",
  "migraine": "/images/conditions/migraine.jpeg",
  "psoriasis": "/images/conditions/psoriasis.jpeg",
  "arthritis": "/images/conditions/arthritis.jpeg",
  "gastric": "/images/conditions/gastric.jpeg",
  "piles": "/images/conditions/piles.jpeg",
  "kidney-stones": "/images/conditions/kidney-stones.jpeg",
  "fatty-liver": "/images/conditions/fatty-liver.jpeg",
  "diabetes": "/images/conditions/diabetes.jpeg",
  "hypertension": "/images/conditions/hypertension.jpeg",
  "womens-health": "/images/conditions/womens-health.jpeg",
  "childrens-health": "/images/conditions/childrens-health.jpeg",
  "cough-cold": "/images/conditions/cough-cold.jpeg",
  "mental-health": "/images/conditions/mental-health.jpeg",
  "hairfall": "/images/conditions/hairfall.jpeg",
};

/* ---------------- Conditions ---------------- */
function Conditions() {
  return (
    <section id="conditions" className="relative py-20 md:py-28 bg-teal-tint/60">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">What We Treat</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-primary">
              Conditions We Treat
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tap any card to explore common symptoms, our approach, and when to seek urgent care.
            </p>
          </Reveal>
        </div>

        <div className="mt-14">
          <Accordion
            type="single"
            collapsible
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
          >
            {conditions.map((c, i) => {
              const Icon = iconMap[c.icon] ?? Leaf;
              const tone = ["bg-teal-tint", "bg-muted/70", "bg-accent/50"][i % 3];
              
              return (
                  <Reveal
  key={c.id}
  delay={(i % 4) * 80}
  className="h-full"
>
                  <AccordionItem
                    value={c.id}
                    className="lift group flex h-full flex-col overflow-hidden rounded-[26px] border border-border bg-card shadow-soft hover:border-primary/30 hover:shadow-lift data-[state=open]:shadow-lift data-[state=open]:ring-1 data-[state=open]:ring-primary/20"
                  >
                    <div className="relative aspect-square w-full shrink-0 overflow-hidden">
                     <img
                       src={conditionImages[c.id]}
                       alt={c.name}
                       loading="lazy"
                       className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                     />
                    </div>
                    <AccordionTrigger className="mt-auto px-5 py-5 text-left transition-colors hover:bg-teal-tint/40 hover:no-underline [&>svg]:text-primary [&>svg]:transition-transform [&>svg]:duration-500">
                      <div className="min-w-0 pr-3">
                        <div className="font-display text-base font-semibold text-foreground">
                          {c.name}
                        </div>
                        <p className="mt-2 line-clamp-2 text-xs font-normal leading-relaxed text-muted-foreground">
                          {c.symptoms}
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-6 pt-1">
                      <div className="space-y-4 text-sm leading-relaxed">
                        <SubBlock label="Common Symptoms" text={c.symptoms} tone="primary" />
                        <SubBlock label="Our Approach" text={c.approach} tone="secondary" />
                        <SubBlock
                          label="When to Seek Urgent Medical Care"
                          text={c.urgent}
                          tone="warn"
                        />
                        <div className="pt-2">
                          <div className="text-[10px] uppercase tracking-[0.16em] font-semibold text-primary mb-2">
                            Book a Consultation
                          </div>
                          <a
                            href={waLink(
                              `Hi, I'd like to consult Dr. Jerusha about ${c.name}`,
                            )}
                            target="_blank"
                            rel="noreferrer"
                            className="press sheen inline-flex items-center gap-2 rounded-full bg-gradient-teal px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
                          >
                            <WhatsAppIcon className="h-3.5 w-3.5" />
                            Book a Consultation for {c.name}
                          </a>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Reveal>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function SubBlock({
  label,
  text,
  tone,
}: {
  label: string;
  text: string;
  tone: "primary" | "secondary" | "warn";
}) {
  const borderClass =
    tone === "warn"
      ? "border-l-amber-500/60"
      : tone === "secondary"
        ? "border-l-secondary"
        : "border-l-primary";
  const labelClass =
    tone === "warn"
      ? "text-amber-700"
      : tone === "secondary"
        ? "text-primary/80"
        : "text-primary";
  return (
    <div className={`border-l-2 ${borderClass} pl-4`}>
      <div className={`text-[10px] uppercase tracking-[0.16em] font-semibold ${labelClass}`}>
        {label}
      </div>
      <p className="mt-1 text-foreground/80">{text}</p>
    </div>
  );
}

/* ---------------- Stats / Trust ---------------- */
function Stats() {
  const stats = [
    { icon: Sparkles, value: 13, suffix: "+", label: "Conditions Covered", sub: "Chronic & acute care" },
    { icon: UserRound, value: null, display: "1:1", label: "Personalised Consultation", sub: "Unhurried case-taking" },
    { icon: HeartPulse, value: null, display: "100%", label: "Patient-Centred Care", sub: "You lead the conversation" },
    { icon: Award, value: 72234, suffix: "", label: "Registration No.", sub: "Consultant Homeopath" },
  ];
  return (
    <section className="relative -mt-6 pb-8 md:pb-14">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-4 rounded-3xl border border-border/70 bg-card/80 p-5 shadow-soft backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-4 md:p-7">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 110}>
              <TiltCard max={2} className="h-full">
              <div className="lift group h-full rounded-2xl bg-gradient-to-br from-teal-tint/70 to-transparent p-5 text-center hover:shadow-soft">
                <div className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-teal text-primary-foreground transition-transform duration-500 group-hover:scale-110">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-display text-3xl font-bold text-primary">
                  {s.value !== null ? (
                    <CountUp to={s.value} suffix={s.suffix ?? ""} />
                  ) : (
                    s.display
                  )}
                </div>
                <div className="mt-1 text-sm font-semibold text-foreground">{s.label}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.sub}</div>
              </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Patient Journey ---------------- */
function Journey() {
  const steps = [
    {
      icon: MessageSquareHeart,
      title: "Consultation",
      text: "Reach out on WhatsApp and book an in-clinic or online appointment at your convenience.",
    },
    {
      icon: ClipboardList,
      title: "Case Assessment",
      text: "A detailed, unhurried case history covering your symptoms, history and lifestyle.",
    },
    {
      icon: FlaskConical,
      title: "Personalised Treatment",
      text: "A remedy plan chosen for your individual constitution, with clear guidance.",
    },
    {
      icon: CalendarCheck,
      title: "Follow-up",
      text: "Regular reviews to track progress and refine your plan as you improve.",
    },
  ];
  return (
    <section id="journey" className="relative overflow-hidden py-20 md:py-28 bg-teal-tint/40">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full opacity-25 blur-3xl animate-soft-float"
        style={{ background: "var(--gradient-sage)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">How It Works</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-primary">
              Your Patient Journey
            </h2>
            <p className="mt-4 text-muted-foreground">
              Four simple steps — from your first message to steady, supported progress.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-11 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((st, i) => (
              <Reveal key={st.title} delay={i * 130}>
                <TiltCard max={2.5} className="h-full">
                <div className="lift group relative h-full rounded-2xl border border-border bg-card p-6 text-center shadow-soft hover:border-primary/30 hover:shadow-lift">
                  <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-teal text-primary-foreground shadow-soft transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-3">
                    <st.icon className="h-6 w-6" />
                  </div>
                  <div className="absolute right-5 top-5 font-display text-3xl font-bold text-primary/10">
                    0{i + 1}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                    {st.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{st.text}</p>
                </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Homeopathy ---------------- */
function WhyHomeopathy() {
  const items = [
    {
      icon: UserRound,
      title: "Personalised Case-Taking",
      text: "Deep, unhurried consultations that consider your whole story — physical, emotional, and lifestyle.",
    },
    {
      icon: Leaf,
      title: "Gentle & Natural",
      text: "Highly-diluted remedies chosen for your individual constitution, with a gentle side-effect profile.",
    },
    {
      icon: Users,
      title: "Suitable For All Ages",
      text: "Safe options for children, adults, women's health, and elderly care.",
    },
    {
      icon: ShieldCheck,
      title: "Works Alongside Modern Care",
      text: "Complementary support that respects your ongoing conventional treatment when needed.",
    },
  ];
  return (
    <section id="why" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Our Philosophy</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-primary">
              Why Choose Homoeopathy
            </h2>
            <p className="mt-4 text-muted-foreground">
              A calm, considered approach that puts you — not the prescription — at the centre.
            </p>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 100}>
              <div className="lift group h-full rounded-2xl border border-border bg-card p-6 shadow-soft hover:border-primary/30 hover:shadow-lift">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-sage text-primary-foreground transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg text-foreground">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const quotes = [
    {
      name: "Priya S.",
      role: "Patient · Faridabad",
      text: "Dr. Jerusha genuinely listened. My migraines have reduced significantly — I feel like I have my life back.",
    },
    {
      name: "Rahul M.",
      role: "Patient · Online consultation",
      text: "Truly personalised care. The online consultation was thorough and easy, and my skin has improved gradually and steadily.",
    },
    {
      name: "Anjali K.",
      role: "Mother of two",
      text: "My kids' recurring colds are finally under control. She's warm, patient and clearly cares.",
    },
    {
      name: "Vivek R.",
      role: "Patient · Faridabad",
      text: "A calming clinic experience. Honest advice, gentle remedies, and real follow-through.",
    },
  ];
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-teal-tint/60">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Patient Stories</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-primary">
              What Our Patients Say
            </h2>
            <p className="mt-3 text-xs text-muted-foreground italic">
              (Placeholder testimonials — replace with real patient stories.)
            </p>
          </Reveal>
        </div>

        <div className="mt-12 -mx-6 md:mx-0 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory">
          <div className="flex gap-3 px-4 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4">
            {quotes.map((q, i) => (
              <Reveal
                key={q.name}
                delay={i * 100}
                className="snap-start shrink-0 w-[calc(50%-6px)] sm:w-[340px] md:w-auto"
              >
                <figure className="lift group relative h-full w-full overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-soft hover:border-primary/30 hover:shadow-lift">
                  <Quote className="relative h-5 w-5 text-secondary transition-transform duration-500 group-hover:scale-110" />
                  <blockquote className="mt-2.5 text-[13px] leading-snug text-foreground/85">
                    “{q.text}”
                  </blockquote>
                  <div className="mt-3 flex items-center gap-0.5 text-amber-500">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-3 w-3 fill-current" />
                    ))}
                  </div>
                  <figcaption className="mt-3">
                    <div className="font-display font-semibold text-[13px]">{q.name}</div>
                    <div className="text-[11px] text-muted-foreground">{q.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    {
      q: "Is homeopathy safe for children?",
      a: "Yes. Homoeopathic remedies are highly diluted and are commonly used for infants, children and adolescents under professional guidance.",
    },
    {
      q: "How long does treatment take?",
      a: "Duration varies with the condition, its chronicity and individual response. Acute complaints may improve quickly; chronic conditions often need consistent follow-ups over weeks to months.",
    },
    {
      q: "Do you offer online consultations?",
      a: "Yes — online consultations are available for patients across India and abroad. You can book easily via WhatsApp.",
    },
    {
      q: "Can I continue my existing medication?",
      a: "In most cases, yes. Homoeopathy can work alongside conventional treatment. Never stop or change prescribed medication without consulting your treating doctor.",
    },
    {
      q: "What should I bring to my first consultation?",
      a: "Any recent lab reports, a list of medications, and a brief timeline of your symptoms. First consultations are usually longer as we take a detailed case history.",
    },
    {
      q: "Are homeopathic remedies free of side effects?",
      a: "When prescribed appropriately for the individual, remedies are generally well-tolerated with a gentle profile. Always take remedies as prescribed.",
    },
  ];
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <div className="text-center">
          <Reveal>
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-primary">
              Frequently Asked
            </h2>
          </Reveal>
        </div>
        <Reveal delay={100}>
          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {faqs.map((f) => (
              <AccordionItem
                key={f.q}
                value={f.q}
                className="rounded-2xl border border-border bg-card px-5 shadow-soft transition-all duration-300 hover:border-primary/30 hover:shadow-lift data-[state=open]:shadow-lift data-[state=open]:ring-1 data-[state=open]:ring-primary/15"
              >
                <AccordionTrigger className="py-4 text-left font-display font-semibold text-foreground transition-colors hover:text-primary hover:no-underline [&>svg]:text-primary [&>svg]:transition-transform [&>svg]:duration-500">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-teal-tint/60">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Visit or Book</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-primary">
              Book Your Consultation
            </h2>
            <p className="mt-4 text-muted-foreground">
              In-clinic in Faridabad, or online from anywhere. We'll get back to you promptly.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-3xl overflow-hidden border border-border bg-card shadow-soft h-full">
              <div className="aspect-[4/3] w-full">
                <iframe
                  title="PrimaCare Homoeopathic Clinic Location"
                  src="https://www.google.com/maps?q=HUDA+Market+Part+2,+Sector+19,+Faridabad&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <div className="font-display font-semibold">PrimaCare Homoeopathic Clinic</div>
                    <div className="text-sm text-muted-foreground">
                      Sector 19, HUDA Market Part 2, Faridabad
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">Clinic hours:</span>{" "}
                  Mon – Sat, 10:00 AM – 7:00 PM · Sun by appointment
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5">
            <Reveal delay={100}>
              <a
                href={waLink("Hi, I'd like to book an appointment with Dr. Jerusha.")}
                target="_blank"
                rel="noreferrer"
                className="relative overflow-hidden rounded-3xl bg-gradient-teal p-8 text-primary-foreground shadow-lift transition-transform hover:scale-[1.01]"
              >
                <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-card/10 blur-2xl" />
                <div className="relative">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black">Fastest way</div>
                  <h3 className="mt-2 text-2xl font-display font-bold text-black">Book an Appointment</h3>
                  <p className="mt-2 max-w-sm text-sm text-black">
                    Chat with us directly on WhatsApp — we'll confirm your slot and share prep details.
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-card/15 px-4 py-2.5 text-sm font-semibold text-black backdrop-blur">
                    <WhatsAppIcon className="h-4 w-4" /> Message on WhatsApp — 99217 11708
                  </div>
                </div>
              </a>
            </Reveal>

            <Reveal delay={200}>
              <a
                href="tel:+919307011209"
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/30 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="eyebrow">Call the clinic</div>
                  <div className="mt-1 font-display font-semibold text-lg">+91 93070 11209</div>
                  <div className="text-xs text-muted-foreground">For calls only</div>
                </div>
              </a>
            </Reveal>

            <Reveal delay={300}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="eyebrow">Online Consultations</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Can't visit the clinic? We offer secure online consultations for patients across
                  India and abroad. Book on WhatsApp to get started.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function XLogoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.5h2.04L6.48 3.24H4.29l13.32 17.4Z" />
    </svg>
  );
}

const socials = [
  { label: "Instagram", Icon: InstagramIcon },
  { label: "Facebook", Icon: FacebookIcon },
  { label: "X", Icon: XLogoIcon },
];

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-gradient-to-b from-teal-tint/40 to-background">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/4 h-64 w-64 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-sage)" }}
      />
      <div className="mx-auto max-w-7xl px-6 md:px-8 relative py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="PrimaCare Homoeopathic Clinic"
              className="h-20 w-auto object-contain md:h-24"
            />
            <div>
              <div className="font-display font-bold text-primary">Dr Jerusha's</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                PrimaCare Homoeopathic Clinic
              </div>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
            Personalised homoeopathic care for your health — rooted in listening, guided by
            evidence-informed practice.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            Dr. Jerusha Kagita Holkar · Consultant Homeopath · Reg. No. 72234
          </p>
        </div>

        <div>
          <div className="eyebrow">Quick Links</div>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-block text-foreground/80 transition-all duration-300 hover:translate-x-1 hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow">Contact</div>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <span>Sector 19, HUDA Market Part 2, Faridabad</span>
            </li>
            <li>
              <a href="tel:+919307011209" className="hover:text-primary">
                +91 93070 11209
              </a>
            </li>
            <li>
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary inline-flex items-center gap-1.5"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" /> +91 99217 11708
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-2">
            {socials.map(({ label, Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:border-primary/40 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-8 py-5 text-xs text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-center md:text-left max-w-3xl">
            Homeopathic treatment is supportive and individualised. In case of a medical emergency,
            please seek immediate professional medical attention.
          </p>
          <p>© {new Date().getFullYear()} PrimaCare Homoeopathic Clinic</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Floating WhatsApp ---------------- */
function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hi, I'd like to book an appointment with Dr. Jerusha.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Book on WhatsApp"
      className="press animate-halo fixed bottom-20 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-whatsapp text-primary-foreground shadow-lift transition-transform duration-500 hover:scale-110 md:bottom-6"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}

/* ---------------- Mobile sticky CTA ---------------- */
function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/90 px-4 py-2.5 backdrop-blur-md md:hidden">
      <a
        href={waLink("Hi, I'd like to book an appointment with Dr. Jerusha.")}
        target="_blank"
        rel="noreferrer"
        className="press sheen flex items-center justify-center gap-2 rounded-full bg-gradient-teal py-3 text-sm font-semibold text-primary-foreground shadow-soft"
      >
        Book Your Consultation
        <ArrowRight className="h-4 w-4" />
        <WhatsAppIcon className="h-4 w-4" />
      </a>
    </div>
  );
}
