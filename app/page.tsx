import MainContent from "@/components/MainContent";
import RightSidebar from "@/components/RightSidebar";

export default function Home() {
  return (
    <div className="flex  relative h-[calc(100vh-75px)]">
      <div className="flex w-full items-stretch justify-stretch gap-1">
        <div className="flex-[0.8]">
          <div className="w-full h-full">
            <MainContent />
          </div>
        </div>
        <RightSidebar />
      </div>
    </div>
  );
}
