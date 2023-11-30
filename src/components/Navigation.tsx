import Link from "next/link";

function Navigation() {
  return (
    <aside className="w-[25vw] h-[80vh] absolute right-0 mx-1">
      <section className="flex bg-white h-[50vh] border-8 border-b-0 border-beige"></section>
      <nav className="flex bg-white h-[30vh] flex-col items-center justify-between border-8 border-beige text-xl">
        <Link
          href="/"
          className="text-white my-2 border-2 border-gray-200 bg-gray-400 hover:bg-gray-300 w-[50%] h-[30%] p-2 text-center"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-white my-2 border-2 border-gray-200 bg-gray-400 hover:bg-gray-300 w-[50%] h-[30%] p-2 text-center"
        >
          About
        </Link>
        <Link
          href="/blog"
          className="text-white my-2 border-2 border-gray-200 bg-gray-400 hover:bg-gray-300 w-[50%] h-[30%] p-2 text-center"
        >
          Blog
        </Link>
      </nav>
    </aside>
  );
}

export default Navigation;
