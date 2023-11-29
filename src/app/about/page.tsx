import React from "react";

export default function About() {
  return (
    <div className="min-h-[80vh] w-[80vw] flex flex-col justify-evenly items-center text-center">
      <h2 className="text-center text-lg">About the Author</h2>
      <p className="text-center border-black border-2 p-4">
        Cordelia Snape is a software developer and teaching assistant living in
        Merseyside, England. She studied Film and Television in Aberystwyth
        University and then began her teaching career in Beijing, China. In her
        free time, she enjoys walking her dog in the woods, learning local
        history and playing video games. In the future, she would like to write
        a screenplay and learn how to paint watercolour.
      </p>
    </div>
  );
}
