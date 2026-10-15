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
        const external = run.href.startsWith("http");
        const className =
          "font-medium text-primary underline decoration-primary/30 underline-offset-2 hover:text-accent" +
          (external ? " inline-flex min-h-11 items-center" : "");
        if (run.href.startsWith("/")) {
          return (
            <Link key={index} href={run.href} className={className}>
              {text}
            </Link>
          );
        }
        return (
          <a
            key={index}
            href={run.href}
            className={className}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
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
        if (block.type === "ul" || block.type === "ol") {
          const List = block.type === "ol" ? "ol" : "ul";
          return (
            <List
              key={index}
              className={
                block.type === "ol"
                  ? "list-decimal space-y-2 pl-5"
                  : "list-disc space-y-2 pl-5"
              }
            >
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <RichText runs={item} />
                </li>
              ))}
            </List>
          );
        }
        if (block.type === "table") {
          return (
            <div key={index} className="overflow-x-auto">
              <table className="w-full min-w-[20rem] border-collapse text-left text-sm sm:text-base">
                <thead>
                  <tr className="border-b border-border text-foreground">
                    {block.headers.map((header) => (
                      <th key={header} className="px-3 py-2 font-semibold">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row) => (
                    <tr key={row.join("|")} className="border-b border-border">
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={
                            cellIndex === row.length - 1
                              ? "px-3 py-2 text-right"
                              : "px-3 py-2"
                          }
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
