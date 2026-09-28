import MedicalDirectoryPage from "../components/medical/MedicalDirectoryPage";

import {
  getAllTreatments,
} from "../utils/medicalDirectory";


export default function AllTreatments() {
  const treatments =
    getAllTreatments();

  return (
    <MedicalDirectoryPage
      type="treatments"
      items={treatments}
    />
  );
}