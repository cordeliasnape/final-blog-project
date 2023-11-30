import Link from "next/link";

function Header() {
  return (
    <>
      <header className="min-w-[100vw] h-[10vh] text-darkBlue py-4 flex items-center justify-center space-x-10">
        <div className="flex space-x-4 mx-auto">
          <h1 className="text-2x1 font-bold text-xl mx-auto">
            Cordelia&apos;s Website
          </h1>
        </div>
      </header>
      <hr className="mx-auto w-[80vw] bg-gray-800"></hr>
    </>
  );
}

export default Header;
