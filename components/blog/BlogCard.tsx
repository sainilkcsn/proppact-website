import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog-data";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-border bg-white shadow-card transition-shadow hover:shadow-soft">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[16/10]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </Link>
      <div className="space-y-3 p-5">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-accent">
          <span>{post.category}</span>
          <span className="text-muted-foreground normal-case tracking-normal">
            {post.dateLabel}
          </span>
        </div>
        <h3 className="font-heading text-xl font-semibold text-primary">
          <Link href={`/blog/${post.slug}`} className="hover:text-accent">
            {post.title}
          </Link>
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex text-sm font-medium text-primary hover:text-accent"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
