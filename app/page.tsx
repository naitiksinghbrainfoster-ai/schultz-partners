import HomePageSections from "@/components/HomePageSections";
import PageInteractions from "./page-interactions";

export default function HomePage() {
  return (
    <PageInteractions>
      <div id="page-content">
        <HomePageSections />
      </div>
    </PageInteractions>
  );
}
