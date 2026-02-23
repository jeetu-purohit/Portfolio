import Container from "../common/Container";
import { Link } from "next-view-transitions";

export const Blogs = [
  {
    name: "Am I privileged or not?",
    description:
      "A fleeting moment at a chaotic bus stand forces a young man to confront a quiet, unsettling question about privilege, contentment, and comparison. Through the eyes of a homeless child and her simple joy, this piece may change the way you see your own life.",
    href: "https://medium.com/@jeetujpurohit/am-i-privileged-or-not-4b72ca9e5d0f",
  },
];

export default function Blog() {
  return (
    <Container className="mx-auto my-10 max-w-5xl px-4">
      {/* Section Heading */}
      <div className="mb-10 space-y-3">
        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-zinc-800 dark:text-zinc-100">
          Blogs
        </h2>
        <p className="text-zinc-400 dark:text-zinc-400 max-w-2xl">
          I write about daily experiences, insights, growth, and technology.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="space-y-6">
        {Blogs.map((blog) => (
          <Link
            key={blog.name}
            href={blog.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-100/10 dark:bg-zinc-800/60 backdrop-blur-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 leading-tight">
                  {blog.name}
                </h3>
                <p className="mt-2 text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                  {blog.description}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-zinc-400">
                  Medium
                </span>

                <span className="text-sm font-medium transition-transform duration-300 group-hover:translate-x-1">
                  Read →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}