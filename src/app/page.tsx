import Footer from "@/components/Footer";
import HeaderImage from "@/components/HeaderImage";
import SecondSection from "@/components/SecondSection";
// import SectionEight from "@/components/SectionEight";
import SectiveFive from "@/components/SectionFive";
import SectionFout from "@/components/SectionFout";
import SectionNine from "@/components/SectionNine";
import SectionSeven from "@/components/SectionSeven";
import SectionSix from "@/components/SectionSix";
import SectionTen from "@/components/SectionTen";
import ThirdSection from "@/components/ThirdSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto w-full">
      <HeaderImage />
      <SecondSection />
      <ThirdSection />
      <SectionFout />
      <SectionTen />
      <SectiveFive />
      <SectionSix />
      <SectionSeven />
      {/* <SectionEight/> */}
      <SectionNine />

      <Footer />
    </div>
  );
}
