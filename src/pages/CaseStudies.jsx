import KnowledgeListingPage from "../components/knowledge/KnowledgeListingPage";
import { caseStudyData } from "../data/knowledgeCenterData";

export default function CaseStudies() {
  return (
    <KnowledgeListingPage
      title="Case Studies"
      description="Explore selected healthcare case-study resources."
      items={caseStudyData}
      type="case-studies"
    />
  );
}