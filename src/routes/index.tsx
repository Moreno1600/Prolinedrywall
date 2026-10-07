import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, Check, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

import archAsset from "../assets/proline-arched-interior.png.asset.json";
import builtinsAsset from "../assets/proline-builtins.png.asset.json";
import logoAsset from "../assets/proline-logo-transparent-v2.png.asset.json";
import textureAsset from "../assets/proline-texture-project.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ProLine Drywall | Precision Installation & Finishing in NWA" },
      {
        name: "description",
        content:
          "Precision drywall installation, finishing, texture, and interior painting across Northwest Arkansas. Free on-site estimates, no pressure.",
      },
      {
        property: "og:title",
        content: "ProLine Drywall | Built Clean. Finished Sharp.",
      },
      {
        property: "og:description",
        content:
          "Knockdown, orange peel, Level 4, and Level 5 drywall finishing for Northwest Arkansas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { number: "01", title: "Knockdown texture", description: "Sprayed, knocked down, and dried to the same depth across every square foot. Dimensional without looking heavy." },
  { number: "02", title: "Orange peel texture", description: "A fine, even spray with everything masked and every edge cut clean. Texture that reads smooth, not speckled." },
  { number: "03", title: "Level 4 smooth", description: "Tight seams, clean corners, paint-ready. The dependable finish for most rooms in the house." },
  { number: "04", title: "Level 5 smooth", description: "A full skim coat that holds up to hard light and deep color. Flat under the flashlight, not just the camera." },
  { number: "05", title: "Interior paint", description: "Color from the same crew that finished your walls. Rolling into the lineup soon.", status: "Coming soon" },
];

const ticker = ["Knockdown texture", "Orange peel", "Level 4 smooth", "Level 5 smooth", "Northwest Arkansas"];

const estimateSteps = [
  { number: "01", title: "Call or text", description: "A real person answers. Tell us the room and the finish you want." },
  { number: "02", title: "Walk the job", description: "We measure, read the light, and see what's underneath before quoting." },
  { number: "03", title: "Written number", description: "One price, scope in writing, before a single sheet goes up." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[90rem] items-center justify-between px-5 lg:px-10">
          <a href="#top" className="group flex items-center" aria-label="ProLine Drywall home">
            <img
              src={logoAsset.url}
              alt="ProLine Drywall"
              className="h-12 w-auto max-w-[10rem] object-contain transition-opacity group-hover:opacity-80"
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex" aria-label="Main navigation">
            <a href="#services" className="nav-link">Services</a>
            <a href="#work" className="nav-link">Work</a>
            <a href="#estimate" className="nav-link">Free estimates</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:4793204243" className="button-primary hidden sm:inline-flex">
              <Phone size={16} aria-hidden="true" /> (479) 320-4243
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="icon-button md:hidden"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-5 md:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-4 font-display text-xl font-semibold">
              <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
              <a href="#estimate" onClick={() => setMenuOpen(false)}>Free estimates</a>
              <a href="tel:4793204243" className="text-primary">(479) 320-4243</a>
            </div>
          </nav>
        )}
      </header>

      <section id="top" className="relative min-h-[92svh] border-b border-border pt-20">
        <img src={archAsset.url} alt="Tall arched drywall passage in a ProLine project" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto flex min-h-[calc(92svh-5rem)] max-w-[90rem] items-end px-5 pb-12 lg:px-10 lg:pb-16">
          <div className="max-w-6xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-foreground/70">
              <span className="h-px w-10 bg-primary" /> Precision finishing / Northwest Arkansas
            </p>
            <h1 className="max-w-5xl font-display text-[clamp(3.5rem,8.4vw,8.6rem)] font-bold uppercase leading-[0.82]">
              Built clean.<br /><span className="text-primary">Finished sharp.</span>
            </h1>
            <div className="mt-8 flex flex-col items-start justify-between gap-8 border-t border-foreground/20 pt-7 md:flex-row md:items-end">
              <p className="max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
                Knockdown, orange peel, Level 4, Level 5 — prepped tight, finished flat, and detailed like it has to pass the light test.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#estimate" className="button-primary">Free estimate <ArrowDownRight size={17} /></a>
                <a href="tel:4793204243" className="button-secondary">Call ProLine <Phone size={16} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-border bg-secondary py-5" aria-label="ProLine services">
        <div className="ticker-track">
          {[...ticker, ...ticker].map((item, index) => (
            <span key={`${item}-${index}`} className="flex shrink-0 items-center gap-8 font-display text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">
              {item}<span className="h-1.5 w-1.5 bg-primary" />
            </span>
          ))}
        </div>
      </div>

      <section id="services" className="border-b border-border bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
          <div className="mb-16 grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="section-kicker">01 / Capabilities</p>
              <h2 className="section-title">Every layer.<br />One standard.</h2>
            </div>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground lg:justify-self-end">
              Four finish systems, one bar to clear — chosen to match each room's light, use, and character.
            </p>
          </div>
          <div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-5">
            {services.map(({ number, title, description, status }) => (
              <article key={number} className="service-item border-b border-r border-border p-7 lg:min-h-80 lg:p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs text-primary">{number} /</span>
                  {status && <span className="border border-primary px-2 py-1 text-[0.6rem] font-bold uppercase text-primary">{status}</span>}
                </div>
                <div className="mt-16 lg:mt-24">
                  <h3 className="font-display text-xl font-bold uppercase">{title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="border-b border-border bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">02 / Field work</p>
              <h2 className="section-title">The work<br />speaks first.</h2>
            </div>
            <p className="max-w-md text-muted-foreground">Real ProLine jobs. Tight transitions, even texture, and detail carried all the way to the last edge.</p>
          </div>

          <div className="project-grid">
            <figure className="project project-tall">
              <img src={archAsset.url} alt="Finished archway and tall interior drywall surfaces" />
              <figcaption><span>Architectural volumes</span><span>01</span></figcaption>
            </figure>
            <figure className="project project-wide">
              <img src={builtinsAsset.url} alt="Custom green and wood built-in shelving with finished walls" />
              <figcaption><span>Integrated built-ins</span><span>02</span></figcaption>
            </figure>
            <figure className="project project-wide">
              <img src={textureAsset.url} alt="Textured renovation space with black-framed windows" />
              <figcaption><span>Texture & transition</span><span>03</span></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-24 lg:py-32">
        <div className="mx-auto grid max-w-[90rem] gap-12 px-5 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-7">
            <p className="section-kicker">03 / Why ProLine</p>
            <h2 className="section-title max-w-4xl">Your walls should disappear. The quality shouldn’t.</h2>
          </div>
          <div className="space-y-7 lg:col-span-4 lg:col-start-9 lg:pt-10">
            {["Four finish systems, zero shortcuts", "Sharp detail around arches, corners, and built-ins", "Painting on the way — same crew, same standard"].map((item) => (
              <div key={item} className="flex gap-4 border-t border-border pt-5">
                <Check className="mt-0.5 shrink-0 text-primary" size={18} />
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="estimate" className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto grid max-w-[90rem] gap-14 px-5 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-7">
            <p className="section-kicker">04 / Free estimates</p>
            <h2 className="section-title">Free estimate.<br />Straight answer.</h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Tell us the room, the finish, and the timeline. We walk the job, check the light, and hand you a written number. No charge to look, no pressure to book.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="tel:4793204243" className="button-primary">Call ProLine <Phone size={16} /></a>
              <a href="sms:4793204243" className="button-secondary">Text a photo <ArrowUpRight size={17} /></a>
            </div>
            <p className="mt-7 text-xs uppercase tracking-[0.16em] text-muted-foreground">Fayetteville · Rogers · Bentonville · Springdale</p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-12">
            {estimateSteps.map(({ number, title, description }) => (
              <div key={number} className="border-t border-border py-6 first:border-t-0 first:pt-0">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-lg font-bold uppercase">{title}</h3>
                  <span className="font-mono text-xs text-primary">{number}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-[90rem] px-5 py-20 lg:px-10 lg:py-28">
          <p className="section-kicker">ProLine Drywall / NWA</p>
          <a href="tel:4793204243" className="group mt-8 flex items-end justify-between gap-6 border-b border-border pb-8">
            <span className="font-display text-[clamp(2.4rem,7vw,7rem)] font-bold uppercase leading-none transition-colors group-hover:text-primary">Let’s build it right.</span>
            <ArrowUpRight className="mb-1 shrink-0 text-primary" size={42} />
          </a>
          <div className="mt-10 flex flex-col justify-between gap-7 text-sm text-muted-foreground md:flex-row md:items-end">
            <div>
              <a href="tel:4793204243" className="font-display text-2xl font-bold text-foreground hover:text-primary">(479) 320-4243</a>
              <p className="mt-2">Fayetteville · Rogers · Bentonville · Springdale</p>
            </div>
            <p>© {new Date().getFullYear()} ProLine Drywall. Precision trade excellence.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}