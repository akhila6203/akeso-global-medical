import HeroBanner from "../components/home/HeroBanner";
import QuickServices from "../components/home/QuickServices";
import HomeSpecialities from "../components/home/HomeSpecialities";

// export default function Home() {
export default function Home({
  onOpenAuth,
}) {
  return (
    <>
      {/* <HeroBanner /> */}
      <HeroBanner
  onOpenAuth={onOpenAuth}
/>

      <QuickServices />

      <HomeSpecialities />
    </>
  );
}