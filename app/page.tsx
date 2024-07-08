import MainContent from "@/components/MainContent";
import RightSidebar from "@/components/RightSidebar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { allPost } from "@/lib/dummy";

export default function Home() {
  return (
    <div className="flex relative overflow-hidden h-[calc(100vh-60px)] lg:h-[calc(100vh-75px)]">
      <Carousel
        opts={{
          align: "start",
        }}
        orientation="vertical"
        className="relative w-full max-w-full !p-0"
      >
        <CarouselContent className="relative w-full h-[calc(100vh-60px)] lg:h-[calc(100vh-75px)] !m-0 !p-0">
          {allPost?.map((post, index) => (
            <CarouselItem
              key={index}
              className="pb-1 !pt-0 lg:!pt-1 w-full h-[100vh]"
            >
              <div className="flex w-full items-stretch justify-stretch gap-1">
                <div className="lg:flex-[0.8]">
                  <div className="w-full h-full">
                    <MainContent
                      videoSrc={post.videoSrc}
                      likes={post.likes}
                      comment={post.comment}
                      bookmark={post.bookmark}
                      shares={post.shares}
                    />
                  </div>
                </div>
                <RightSidebar
                  fullname={post.fullname}
                  pics={post.pics as string}
                  username={post.username}
                  caption={post.caption}
                  comments={post.comments}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-20 lg:top-28 flex w-[30px] h-[30px] !p-0 left-[88%] lg:left-[46%] z-[999]" />
        <CarouselNext className="absolute top-32 lg:top-40 flex w-[30px] h-[30px] !p-0 left-[88%] lg:left-[46%] z-[999]" />
      </Carousel>
    </div>
  );
}
