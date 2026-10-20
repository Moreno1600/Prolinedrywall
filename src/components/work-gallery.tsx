import { Play, Maximize2 } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import v1 from "@/assets/proline-img-3637.mp4.asset.json";
import p1 from "@/assets/proline-img-3637.jpg.asset.json";
import v2 from "@/assets/proline-img-3830.mp4.asset.json";
import p2 from "@/assets/proline-img-3830.jpg.asset.json";
import v3 from "@/assets/proline-img-3834.mp4.asset.json";
import p3 from "@/assets/proline-img-3834.jpg.asset.json";
import v4 from "@/assets/proline-img-3945.mp4.asset.json";
import p4 from "@/assets/proline-img-3945.jpg.asset.json";
import v5 from "@/assets/proline-img-4120.mp4.asset.json";
import p5 from "@/assets/proline-img-4120.jpg.asset.json";

type Project = { title: string; description: string; video: string; photo: string; label: string };
const projects: Project[] = [
  { title: "Professional Drywall Finishing", description: "A closer look at the care and preparation behind professional drywall surfaces.", video: v2.url, photo: p2.url, label: "In progress" },
  { title: "Residential Drywall Installation", description: "A behind-the-scenes look at residential drywall work and the steps involved in creating clean interiors.", video: v3.url, photo: p3.url, label: "Behind the scenes" },
  { title: "Custom Interior Finishes", description: "Interior details, wall surfaces, and architectural features showcased through real job-site footage.", video: v5.url, photo: p5.url, label: "Interior finish" },
  { title: "Completed Project Showcase", description: "A look at completed interior spaces and the finished walls that bring a room together.", video: v4.url, photo: p4.url, label: "Finished space" },
];
const additional: Project = { title: "Residential Wall Surfaces", description: "An additional view of the interior finishes featured in our project footage.", video: v1.url, photo: p1.url, label: "More footage" };

export function WorkGallery() {
  const [selected, setSelected] = useState<Project | null>(null);
  return (
    <>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">Real job-site footage. Select a photo to watch the project video.</p>
        <span className="font-mono text-xs uppercase tracking-widest text-primary">04 featured projects</span>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="group overflow-hidden border border-border bg-background">
            <button type="button" onClick={() => setSelected(project)} className="relative block w-full overflow-hidden text-left" aria-label={`Watch ${project.title} video`}>
              <img src={project.photo} alt={project.title + " — actual project video still"} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/35" />
              <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-black/60 text-white"><Play size={24} fill="currentColor" /></span>
              <span className="absolute bottom-4 left-4 bg-background/90 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest">{project.label}</span>
            </button>
            <div className="p-6">
              <h3 className="font-display text-2xl font-bold uppercase">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
              <button type="button" onClick={() => setSelected(project)} className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase text-primary hover:underline">Watch project <Play size={15}/></button>
            </div>
          </article>
        ))}
      </div>
      <button type="button" onClick={() => setSelected(additional)} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"><Maximize2 size={16}/> View additional project footage</button>
      <Dialog open={selected !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}>
        <DialogContent aria-describedby={undefined} className="max-w-5xl gap-4 rounded-none border-border bg-background p-5 pt-12">
          {selected && <>
            <DialogTitle>{selected.title}</DialogTitle>
            <video key={selected.video} src={selected.video} poster={selected.photo} controls autoPlay playsInline className="max-h-[70svh] w-full" />
            <p className="text-sm text-muted-foreground">{selected.description}</p>
          </>}
        </DialogContent>
      </Dialog>
    </>
  );
}
