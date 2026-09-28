import KnowledgeListingPage from "../components/knowledge/KnowledgeListingPage";
import { blogData } from "../data/knowledgeCenterData";

export default function Blogs() {
  return (
    <KnowledgeListingPage
      title="Blogs"
      description="Explore educational articles and healthcare insights."
      items={blogData}
      type="blogs"
    />
  );
}