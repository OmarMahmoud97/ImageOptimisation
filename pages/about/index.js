import { BackgroundImage } from "@/components/SVGComponents";
import NavbarComponent from "@/components/NavbarComponent";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);

  return (
    <>
      <span className="hidden md:block">
        <BackgroundImage />
      </span>
      <div className="flex flex-col items-center min-h-screen">
        <NavbarComponent currentPage="about" />
        <main className="flex flex-col items-center flex-shrink justify-center lg:w-5/12 p-10 text-center z-50">
          Upscale
        </main>
      </div>
    </>
  );
}
