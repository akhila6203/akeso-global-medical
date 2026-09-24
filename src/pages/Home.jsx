import HeroBanner from "../components/home/HeroBanner";
import QuickServices from "../components/home/QuickServices";
import HomeSpecialities from "../components/home/HomeSpecialities";

import WhyAkeso from "../components/home/WhyAkeso";
import CostComparison from "../components/home/CostComparison";
import TeleVisits from "../components/home/TeleVisits";
import PostOpWellness from "../components/home/PostOpWellness";
import FounderWords from "../components/home/FounderWords";
import BecomePartner from "../components/home/BecomePartner";

export default function Home({
  onOpenAuth,
}) {
  return (
    <>
      <HeroBanner
        onOpenAuth={onOpenAuth}
      />

      <QuickServices />

      <HomeSpecialities />

      <WhyAkeso />

      <CostComparison />

      <TeleVisits />

      <PostOpWellness />

      <FounderWords />

      <BecomePartner />
    </>
  );
}