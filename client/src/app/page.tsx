import { Icons } from "@/components/icons";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { TopicCreator } from "@/components/topic-creator";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-screen bg-grid-zinc-50">
      <MaxWidthWrapper className="relative pb-24 pt-10 sm:pb-32 lg:pt-24 xl:pt-32 lg:pb-52">
        <div className="hidden lg:block absolute inset-0 top-8">
          {/* circle */}
        </div>
        <div className="px-6 lg:px-0 lg:pt-4">
          <div className="relative mx-auto text-center flex flex-col items-center">
            <h1 className="relative leading-none w-fit tracking-tight text-balance mt-12 sm:mt-10 md:mt-8 lg:mt-6 font-bold text-gray-900 text-5xl md:text-6xl">
              What do you{" "}
              <span className="whitespace-nowrap">
                th
                <span className="relative">
                  i
                  <span className="absolute inset-x-0  top-0.5 md:top-1  -translate-x-3">
                    <Icons.brain className="h-7 w-7 md:h-8 md:w-8" />
                  </span>
                </span>
                nk
              </span>{" "}
              about ...
            </h1>

            <TopicCreator />

            <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div
                className="flex flex-col gap-1 justify-between items-center sm:itst
"
              >
                <div className="flex gap-0.5">
                  <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  <Star className="h-4 w-4 text-green-600 fill-green-600" />
                </div>

                <p>
                  <span className="font-semibold">10</span> served request
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
