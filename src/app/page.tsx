import HeroSection from "@/components/home/HeroSection";
import CustomFlows from "@/components/home/CustomFlows";
import HighScale from "@/components/home/HighScale";
import OurResources from "@/components/home/OurResources";
import WhatIsChatResponde from "@/components/home/WhatIsChatResponde";
import IntegrateWithEase from "@/components/home/IntegrateWithEase";
import Plans from "@/components/home/Plans";
import ActiveSubscriptions from "@/components/home/ActiveSubscriptions";
import Faq from "@/components/home/Faq";
import SignUpForm from "@/components/home/SignUpForm";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CustomFlows />
      <HighScale />
      <OurResources />
      <WhatIsChatResponde />
      <IntegrateWithEase />
      <Plans />
      <ActiveSubscriptions />
      <Faq />
      <SignUpForm />
    </main>
  );
}
