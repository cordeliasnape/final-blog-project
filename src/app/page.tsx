import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="flex w-screen">
      <Navigation />
      <main className="h-[80vh] w-[80vw] text-darkBlue flex flex-col p-2 text-center items-center justify-between">
        <h2>hello</h2>
      </main>
    </div>
  );
}
