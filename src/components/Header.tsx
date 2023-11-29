import Link from "next/link";

function Header() {
  return (
    <>
      <header className="text-white py-4 flex items-center justify-center space-x-10">
        <div className="flex space-x-4 mx-auto">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <h1 className="text-2x1 font-bold text-xl mx-auto">
            Cordelia's Website
          </h1>
          <Link href="/blog">Blog</Link>
        </div>
      </header>
      <hr className="mx-auto w-[80vw] bg-gray-800"></hr>
    </>
  );
}

export default Header;
