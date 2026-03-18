import Image from "next/image";
import VideoHero from "./Components/VideoHero";
import ConnectingDotsSection from "./Components/ConnectingDotsSection";
import CopenhagenSection from "./Components/ConnectingDotsSection";
import GrowingTogetherSection from "./Components/GrowingTogetherSection";
import GroupNumbers from "./Components/GroupNumbers";
import AboutSection from "./Components/AboutSection";
import ParticleSphere from "./Components/ParticleSphere";
import FooterTopCTA from "./Components/FooterTop";

export default function Home() {
  return (
    <div>
      <VideoHero />
      <CopenhagenSection />
      <GrowingTogetherSection />
      <GroupNumbers />
      <AboutSection />
      <div className="w-full   lg:w-full flex justify-center items-center mx-auto h-screen relative z-50">
        {" "}
        <ParticleSphere />{" "}
      </div>
      <FooterTopCTA />
    </div>
  );
}
