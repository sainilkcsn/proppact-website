import Image from "next/image";
import Link from "next/link";
import type { BlogBlock, BlogRun } from "@/lib/blog-data";

function RichText({ runs }: { runs: BlogRun[] }) {
  return (
    <>
      {runs.map((run, index) => {
        const text = run.strong ? (
          <strong className="font-semibold text-foreground">{run.text}</strong>
        ) : (
          run.text
        );
        if (!run.href) {
          return <span key={index}>{text}</span>;
        }
        const className =
          "font-medium text-primary underline decoration-primary/30 underline-offset-2 hover:text-accent";
        if (run.href.startsWith("/")) {
          return (
            <Link key={index} href={run.href} className={className}>
              {text}
            </Link>
          );
        }
        return (
          <a key={index} href={run.href} className={className}>
            {text}
          </a>
        );
      })}
    </>
  );
}

export function BlogContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2
              key={index}
              className="pt-4 font-heading text-2xl font-semibold text-primary"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3
              key={index}
              className="font-heading text-xl font-semibold text-primary"
            >
              {block.text}
            </h3>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={index} className="list-disc space-y-2 pl-5">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <RichText runs={item} />
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "image") {
          return (
            <figure key={index} className="overflow-hidden rounded-lg">
              <div className="relative aspect-[16/9]">
                <Image
                  src={block.src}
                  alt={block.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              </div>
            </figure>
          );
        }
        return (
          <p key={index} className={block.muted ? "text-sm italic" : undefined}>
            <RichText runs={block.runs} />
          </p>
        );
      })}
    </div>
  );
}
