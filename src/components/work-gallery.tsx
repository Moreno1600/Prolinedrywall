import { Film, Image, Play, Maximize2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import archAsset from "@/assets/proline-arched-interior.png.asset.json";
import builtinsAsset from "@/assets/proline-builtins.png.asset.json";
import textureAsset from "@/assets/proline-texture-project.png.asset.json";
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

type WorkItem = {
  description: string;
  type: "photo" | "video";
  src: string;
  poster?: string;
};

const work: WorkItem[] = [
  { description: "Finished archway and tall interior drywall surfaces", type: "photo", src: archAsset.url },
  { description: "Custom green and wood built-in shelving with finished walls", type: "photo", src: builtinsAsset.url },
  { description: "Textured renovation space with black-framed windows", type: "photo", src: textureAsset.url },
  { type: "video", description: "ProLine job site video", src: v1.url, poster: p1.url },
  { type: "video", description: "ProLine job site video", src: v2.url, poster: p2.url },
  { type: "video", description: "ProLine job site video", src: v3.url, poster: p3.url },
  { type: "video", description: "ProLine job site video", src: v4.url, poster: p4.url },
  { type: "video", description: "ProLine job site video", src: v5.url, poster: p5.url },
];

export function WorkGallery() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<WorkItem | null>(null);
  const items = work.filter((item) => filter === "all" || item.type === filter);

  return (
    <>
      <Tabs value={filter} onValueChange={setFilter} className="mb-8">
        <TabsList aria-label="Our work categories" className="h-12 gap-1 rounded-none border border-border bg-background p-1">
          <TabsTrigger value="all" className="h-10 rounded-none px-4">All work</TabsTrigger>
          <TabsTrigger value="photo" className="h-10 gap-2 rounded-none px-4"><Image size={15} aria-hidden="true" />Photos</TabsTrigger>
          <TabsTrigger value="video" className="h-10 gap-2 rounded-none px-4"><Film size={15} aria-hidden="true" />Videos</TabsTrigger>
        </TabsList>
      </Tabs>
      {items.length > 0 ? (
        <div className="project-grid">
          {items.map((item, index) => (
            <figure key={item.src} className={`project ${index === 0 ? "project-tall" : "project-wide"}`}>
              <Button variant="ghost" onClick={() => setSelected(item)} aria-label={item.type === "video" ? "Play video" : "View photo larger"} className="absolute inset-0 h-full w-full rounded-none p-0 hover:bg-transparent">
                {item.type === "photo" ? <img src={item.src} alt={item.description} loading="lazy" /> : <video src={item.src} poster={item.poster} muted playsInline preload="metadata" className="h-full w-full object-cover" />}
                <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-border bg-background/80 text-foreground">
                  {item.type === "video" ? <Play size={18} /> : <Maximize2 size={18} />}
                </span>
              </Button>
            </figure>
          ))}
        </div>
      ) : (
        <div className="flex min-h-72 flex-col items-center justify-center gap-4 border-y border-border text-center">
          <Film size={28} className="text-primary" aria-hidden="true" />
          <h3 className="font-display text-xl font-bold uppercase">From the job site.</h3>
          <p className="text-sm text-muted-foreground">Project videos coming soon.</p>
          <Button variant="link" onClick={() => setFilter("photo")}>View project photos</Button>
        </div>
      )}
      <Dialog open={selected !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}>
        <DialogContent aria-describedby={undefined} className="max-w-5xl gap-4 rounded-none border-border bg-background p-5 pt-12">
          {selected && <>
            <DialogTitle className="sr-only">{selected.type === "video" ? "Project video" : "Project photo"}</DialogTitle>
            {selected.type === "photo" ? <img src={selected.src} alt={selected.description} className="max-h-[70svh] w-full object-contain" /> : <video src={selected.src} poster={selected.poster} controls autoPlay playsInline className="max-h-[70svh] w-full" />}
          </>}
        </DialogContent>
      </Dialog>
    </>
  );
}