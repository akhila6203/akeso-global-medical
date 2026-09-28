import MedicalDirectoryPage from "../components/medical/MedicalDirectoryPage";

import {
  getAllAilments,
} from "../utils/medicalDirectory";


export default function AllAilments() {
  const ailments =
    getAllAilments();

  return (
    <MedicalDirectoryPage
      type="ailments"
      items={ailments}
    />
  );
}