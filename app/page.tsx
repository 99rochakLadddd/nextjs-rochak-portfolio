import Image from "next/image";
import BgAnimation from "@/components/BgAnimation";
import BootstrapTooltip from "@/components/BootstrapTooltips";
import BgAnim from "@/components/BgAnim";
import BootstrapModal from "@/components/BootstrapModal";
import { ThemeToggle } from "@/components/theme-toggle";
import { ContactSection } from "@/components/sections/contact-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";


export default function Home() {
  return (
    <div>
      <ThemeToggle />
      <BgAnim />
      <div className="flex min-h-screen items-center justify-center font-sans">
        <main className="flex w-full max-w-3xl flex-col items-center justify-between px-16  sm:items-start">
          <div className="flex flex-col navbar-div align-items-center text-center sm:items-start sm:text-left ">
            <BootstrapTooltip />
            <Image
              className="my-img"
              src="/image/image.png"
              alt="Rochak Neupane"
              height={150}
              width={150}
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-title="🙏"
            />
            <h2 className="text-light mt-4"><span>Rochak </span>Neupane</h2>

            {/* Background + typing animation */}
            <BgAnimation />

            <p className="my-intro fs-6 mt-0 text-center"> Enthusiast in turning front-end dreams into reality while managing the back-end mess! </p>
          </div>

          <BootstrapModal />
          <button type="button" className="about-me btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
            About Me
          </button>


        </main>
      </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start">
          <div data-aos="fade-up" data-aos-delay="200">
            <SkillsSection />
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <ProjectsSection />
          </div>
          <div data-aos="fade-up" data-aos-delay="600">
            <ExperienceSection />
          </div>
          <div data-aos="fade-up" data-aos-delay="800">
            <ContactSection />
          </div>
        </div>
           <footer>
            <div className="mx-auto max-w-6xl px-4 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
              <p>&copy; 2026 My Portfolio. All rights reserved.</p>
            </div>
          </footer>
      </div>
      

  );
}
