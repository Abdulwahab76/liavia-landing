import Image from "next/image";
import VideoHero from "./Components/VideoHero";
// import ConnectingDotsSection from "./Components/ConnectingDotsSection";
import CopenhagenSection from "./Components/ConnectingDotsSection";
import GrowingTogetherSection from "./Components/GrowingTogetherSection";
// import GroupNumbers from "./Components/GroupNumbers";
import AboutSection from "./Components/AboutSection";
import ParticleSphere from "./Components/ParticleSphere";
import FooterTopCTA from "./Components/FooterTop";
import HowItWorks from "./Components/HowWorks";
import SecuritySafety from "./Components/SecuritySafety";

export default function Home() {
  return (
    <div>
      <VideoHero />
      <CopenhagenSection />
      <div className="w-full    lg:w-full flex justify-center items-center mx-auto   relative z-40">
        {" "}
        <ParticleSphere />{" "}
      </div>
      <GrowingTogetherSection />
      {/* <GroupNumbers /> */}
      <HowItWorks />
      <SecuritySafety />

      <AboutSection />
      <FooterTopCTA />
    </div>
  );
}
