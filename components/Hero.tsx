import { ButtonLink } from "@/components/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-[#081329] to-[#1b428e]">
      <section className="px-fluid-container grid-cols-5 items-center justify-between text-white md:min-h-[83lvh] lg:grid">
        <header className="col-span-3 mb-12 w-full pt-16 lg:mb-0 lg:pt-0">
          <h1 className="text-hero leading-[1.125] mb-2 font-[900] text-[#FF9053] uppercase">
            GRE Universe course
          </h1>
          <p className="text-lg-0 mb-3.5 max-w-[95%] leading-tight font-[600] text-balance">
            Your Entire GRE Universe In One Course — Everything You Need,
            Nothing You Don't.
          </p>
          <p className="text-fluid-base-0 mb-2.5 block font-[400] text-base-0">
            At ₹5,990/- for 3 months.
          </p>
          <div className="text-sm-0 w-[40%] max-w-64">
            <ButtonLink href="/#request-demo-form" label="Enroll now" />
          </div>
          <Link
            className="mt-5 inline-block text-sm-0 pretty italic hover:underline"
            href="/#private-personalised-tutoring"
          >
            Need personal tutoring? Learn about one-to-one
          </Link>
        </header>
        <div className="col-span-2 pb-16 text-center lg:mb-0 lg:pb-0">
          <div className="px-sm max-w-[500px] mx-auto">
            <div className="relative mb-5 flex aspect-square items-center justify-center rounded-full">
              <div className="flex h-[70%] w-[70%] items-start justify-center overflow-hidden rounded-full">
                <div className="bg-white/55">
                  <img
                    className="w-full"
                    src="/images/prof-punit.png"
                    alt="Prof. Punit"
                  />
                </div>
                <img
                  className="absolute bottom-[10%] left-[26%] w-[7%]"
                  src="/images/canada.png"
                  alt=""
                />
                <img
                  className="absolute top-[28%] left-[8%] w-[9%]"
                  src="/images/us.png"
                  alt=""
                />
                <img
                  className="absolute top-0 right-[30%] w-[8%]"
                  src="/images/uk.png"
                  alt=""
                />
                <img
                  className="absolute top-[25%] right-[1%] w-[8%]"
                  src="/images/australia.png"
                  alt=""
                />
                <div className="absolute right-[20%] bottom-[3%] h-[8%] w-[8%] rounded-full bg-white/62"></div>
                <div className="absolute top-[10%] left-[12%] h-[8%] w-[8%] rounded-full bg-white/62"></div>
              </div>
              <div className="absolute inset-0 flex h-full w-full items-center justify-center blur-[0.7px] sm:blur-[1.5px]">
                <div className="insert-0 absolute h-full w-full rounded-full border-1 border-dashed border-white/40 sm:border-3"></div>
                <div className="h-[85%] w-[85%] rounded-full border-1 border-white/40 sm:border-4"></div>
              </div>
            </div>
          </div>
          <a
            href="#instructor"
            className="inline-block rounded-full bg-white px-5 py-2 mt-3 text-sm-0 font-[600] text-[#505866]"
          >
            Punit Mishra GRE: 337/340
          </a>
        </div>
      </section>
    </div>
  );
}
