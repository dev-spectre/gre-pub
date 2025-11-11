import { Button } from "@/components/Button";

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-[#081329] to-[#1b428e]">
      <section className="container mx-auto grid-cols-1 grid-rows-2 items-center justify-between px-5 text-white md:min-h-[90lvh] lg:grid lg:min-h-[100lvh] lg:grid-cols-2 lg:grid-rows-1">
        <header className="mb-16 w-full pt-32 lg:mb-0 lg:pt-0">
          <h1 className="mb-1 text-3xl font-[900] text-[#FF9053] uppercase sm:text-5xl md:text-6xl xl:text-7xl">
            GRE Universe course
          </h1>
          <p className="mb-3 text-lg font-[600] sm:text-xl md:mb-9 md:text-2xl xl:text-[1.75rem]/[158%]">
            World's Most Affordable Complete GRE Prep{" "}
            <span className="block text-base font-[400] sm:text-lg md:text-xl xl:text-2xl">
              At ₹9990/- for 3 months.
            </span>
          </p>
          <div className="w-[40%] max-w-64 text-sm md:text-base xl:text-lg">
            <Button label="Enroll now" />
          </div>
          <a className="mt-5 lg:mt-16 text-sm sm:text-lg inline-block hover:underline" href="#">Need personal tutoring? Learn about one-to-one</a>
        </header>
        <div className="flex flex-col items-center gap-6 pb-16 lg:mb-0 lg:pb-0">
          <div className="relative flex aspect-square max-w-[90%] items-center justify-center overflow-hidden rounded-full lg:max-h-[300px] lg:max-w-[300px] xl:max-h-[350px] xl:max-w-[350px]">
            <div className="flex h-[65%] w-[65%] items-start justify-center overflow-hidden rounded-full">
              <img
                className="w-full"
                src="/images/prof-punit.jpg"
                alt="Prof. Punit"
              />
              <img
                className="absolute bottom-[15%] left-[30%] w-[5%]"
                src="/images/canada.png"
                alt=""
              />
              <img className="absolute w-[7%] left-[15%] top-[28%]" src="/images/us.png" alt="" />
              <img className="absolute w-[6%] top-[7%] right-[36%]" src="/images/uk.png" alt="" />
              <img className="absolute w-[5%] top-[25%] right-[12%]" src="/images/australia.png" alt="" />
              <div className="absolute w-[6%] bottom-[15%] right-[20%] rounded-full bg-white/62 h-[6%]"></div>
              <div className="absolute w-[8%] top-[10%] left-[25%] rounded-full bg-white/62 h-[8%]"></div>
            </div>
            <div className="absolute inset-0 flex h-full w-full items-center justify-center blur-[0.7px] sm:blur-[1.5px]">
              <div className="insert-0 absolute h-[85%] w-[85%] rounded-full border-1 sm:border-4 border-dashed border-white/56"></div>
              <div className="h-[75%] w-[75%] rounded-full border-1 sm:border-4 border-white/56"></div>
            </div>
          </div>
          <a
            href="#instructor"
            className="inline-block rounded-full bg-white px-5 py-2 text-sm font-[600] text-[#505866] md:text-base"
          >
            Punit Mishra GRE: 337/340
          </a>
        </div>
      </section>
    </div>
  );
}
