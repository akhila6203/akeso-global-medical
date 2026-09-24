import InternationalHero from "../components/international/InternationalHero";
import InternationalStats from "../components/international/InternationalStats";
import InternationalServices from "../components/international/InternationalServices";
import TreatmentJourney from "../components/international/TreatmentJourney";
import InternationalDoctors from "../components/international/InternationalDoctors";
import PatientStories from "../components/international/PatientStories";
import AwardsAccreditations from "../components/international/AwardsAccreditations";

// export default function InternationalPatients() {
export default function InternationalPatients({
  onOpenAuth,
}) {
  return (
    <main className="overflow-hidden bg-white">
      <InternationalHero />

      <InternationalStats />

      <InternationalServices />

      <TreatmentJourney />

      {/* <InternationalDoctors /> */}
       <InternationalDoctors
        onOpenAuth={onOpenAuth}
      />

      <PatientStories />

      <AwardsAccreditations />
    </main>
  );
}