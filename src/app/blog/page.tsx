import { getPosts } from "@/lib/posts";
import Link from "next/link";

export default function Page() {
  const posts = getPosts();

  return (
    <div>
      <h2>My Posts</h2>
      <ul>
        {/* @ts-ignore */}
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
