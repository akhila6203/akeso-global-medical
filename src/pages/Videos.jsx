import KnowledgeListingPage from "../components/knowledge/KnowledgeListingPage";
import { videoData } from "../data/knowledgeCenterData";

export default function Videos() {
  return (
    <KnowledgeListingPage
      title="Videos"
      description="Watch educational healthcare videos and medical discussions."
      items={videoData}
      type="videos"
    />
  );
}